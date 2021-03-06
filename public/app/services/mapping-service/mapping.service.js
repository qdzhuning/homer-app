class AdvancedService {
  constructor($http, API) {
    this.$http = $http;
    this.API = API.PREFERENCES.MAPPING;
  }

  /*
  * @return {object} data and schema
  *   {array} data
  *   {object} schema
  */
  async getAll() {
    try {
      const resp = await this.$http.get(this.API.GETALL);
      if (resp.status >= 400) {
        throw new Error(resp.data.message || resp.data.error);
      }
      return resp.data.data;
    } catch (err) {
      throw new Error(`fail to get all advanced settings: ${err.message}`);
    }
  }

  /*
  * @return {object} API confirm
  */
  async add({profile, hepid, hep_alias, partid, version, retention, partition_step, create_index, create_table, correlation_mapping, fields_mapping, mapping_settings, schema_mapping, schema_settings}) {
    try {
      const settings = {profile, hepid, hep_alias, partid, version, retention, partition_step, create_index, create_table, correlation_mapping, fields_mapping, mapping_settings, schema_mapping, schema_settings};
      try {
        settings.correlation_mapping = JSON.stringify(settings.correlation_mapping);
        settings.fields_mapping = JSON.stringify(settings.fields_mapping);
      } catch (err) {
        throw new Error(`fail to stringify data: ${err.message}`);
      }

      const resp = await this.$http.post(this.API.ADD, settings);
      if (resp.status >= 400) {
        throw new Error(resp.data.message || resp.data.error);
      }
    
      return resp;
    } catch (err) {
      throw new Error(`fail to add advanced settings: ${err.message}`);
    }
  }

  /*
  * @return {object} API confirm
  */
  async update({guid, profile, hepid, hep_alias, partid, version, retention, partition_step, create_index, create_table, correlation_mapping, fields_mapping, mapping_settings, schema_mapping, schema_settings}) {
    try {
      const settings = {profile, hepid, hep_alias, partid, version, retention, partition_step, create_index, create_table, correlation_mapping, fields_mapping, mapping_settings, schema_mapping, schema_settings};

      try {
        settings.correlation_mapping = JSON.stringify(settings.correlation_mapping);
        settings.fields_mapping = JSON.stringify(settings.fields_mapping);
        
      } catch (err) {
        throw new Error(`fail to stringify data: ${err.message}`);
      }

      const resp = await this.$http.put([this.API.UPDATE, guid].join('/'), settings);
      if (resp.status >= 400) {
        throw new Error(resp.data.message || resp.data.error);
      }
    
      return resp;
    } catch (err) {
      throw new Error(`fail to update advanced settings: ${err.message}`);
    }
  }

  /*
  * @return {object} API confirm
  */
  async delete(guid) {
    try {
      const resp = await this.$http.delete([this.API.DELETE, guid].join('/'));
      if (resp.status >= 400) {
        throw new Error(resp.data.message || resp.data.error);
      }
    
      return resp;
    } catch (err) {
      throw new Error(`fail to delete advanced settings: ${err.message}`);
    }
  }
}

export default AdvancedService;
