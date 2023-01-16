<template>
    <v-container fluid fill-height>
        <v-row style="height: 100%; padding-left: 24px">
            <v-col>
                <v-form>
                    <v-container fluid fill-height justify-start align-start>
                        <v-text style="height: 100%; padding-left: 1px">Basic Information</v-text>
                        <v-row>
                            <v-col no-gutters>
                                <v-text-field
                                        :type="'text'"
                                        label="Datadog Agent name"
                                        v-model="settings.name"
                                        class="input-group--focused"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col no-gutters>
                                <v-text-field
                                        :type="'text'"
                                        label="Cluster name"
                                        v-model="settings.clusterName"
                                        class="input-group--focused"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col no-gutters>
                                <v-text-field
                                        :type="'text'"
                                        label="Registry"
                                        v-model="settings.registry"
                                        class="input-group--focused"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col no-gutters>
                                <v-text-field
                                        :type="'text'"
                                        label="API Key"
                                        v-model="settings.apiKey"
                                        class="input-group--focused"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col no-gutters>
                                <v-text-field
                                        :type="'text'"
                                        label="APP Key"
                                        v-model="settings.appKey"
                                        class="input-group--focused"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-text style="height: 100%; padding-left: 1px">Cloud Distributions</v-text>    
                        <v-row>
                            <v-radio-group v-model="radioGroup">
                                <v-radio
                                  label="AWS (Bottlerockets)"
                                  color="purple"
                                  value="settings.awsSetup"
                                ></v-radio>
                                <v-radio
                                  label="Azure"
                                  color="purple darken-2"
                                  value="settings.azureSetup"
                                ></v-radio>
                                <v-radio
                                  label="GCP"
                                  color="purple darken-4"
                                  value="settings.gcpSetup"
                                ></v-radio>
                                </v-radio-group>
                        </v-row>
                        <v-text style="height: 100%; padding-left: 1px">Additional services</v-text> 
                        <v-row>
                            <v-col no-gutters>
                                <v-checkbox
                                    v-model="ex4"
                                    label="Log collection"
                                    color="purple"
                                    value="settings.logSetup"
                                    hide-details
                                    ></v-checkbox>
                            </v-col>
                            <v-col no-gutters>
                                <v-checkbox
                                    v-model="ex4"
                                    label="APM"
                                    color="purple darken-2"
                                    value="settings.apmSetup"
                                    hide-details
                                    ></v-checkbox>
                            </v-col>
                            <v-col no-gutters>
                                <v-checkbox
                                    v-model="ex4"
                                    label="Temp"
                                    color="purple darken-4"
                                    value="settings.notSetup"
                                    hide-details
                                    ></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-text style="height: 100%; padding-left: 1px">Environment Variables</v-text>
                            <v-row>
                                <v-col no-gutters>
                                    <v-text-field
                                            :type="'text'"
                                            label="appLabelKey"
                                            v-model="settings.appLabelKey"
                                            class="input-group--focused"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col no-gutters>
                                    <v-text-field
                                            :type="'text'"
                                            label="appLabelValue"
                                            v-model="settings.appLabelValue"
                                            class="input-group--focused"
                                            required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row style="height: 100%; padding-left: 24px">
                                <v-btn>
                                    Add
                                </v-btn>
                            </v-row>
                        <v-text style="height: 100%; padding-left: 1px">Integrations</v-text>
                        <v-row>
                                <v-col no-gutters>
                                    <v-text-field
                                            :type="'text'"
                                            label="appLabelKey"
                                            v-model="settings.appLabelKey"
                                            class="input-group--focused"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col no-gutters>
                                    <v-text-field
                                            :type="'text'"
                                            label="appLabelValue"
                                            v-model="settings.appLabelValue"
                                            class="input-group--focused"
                                            required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row style="height: 100%; padding-left: 24px">
                                <v-btn>
                                    Add
                                </v-btn>
                            </v-row>
                    </v-container>
                </v-form>
            </v-col>
            <v-col no-gutters>
                <v-container fluid fill-height class="generated_container">
                    <textarea v-model="genout" class="generated_output">
                    </textarea>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import uuidv4 from 'uuid/v4'
 //   import jsyaml from 'js-yaml'
    function newContainer() {
        return {
            id: uuidv4(),
            name: '',
            image: '',
            env: [],
            cmd: '',
            args: '',
        }
    }
    function defaultSettings() {
        return {
            name: 'datadog-monitoring',
            clusterName: 'TYPE_YOUR_CLUSTER_NAME',
            registry: 'gcr.io/datadoghq',
            apiKey: 'TYPE_YOUR_APIKEY',
            appKey: 'TYPE_YOUR_APPKEY',
            containers: [newContainer()]
        };
    }
    export default {
        data: () => ({
            genout: '',
            containerTypes: ['initContainers', 'containers'],
            settings: defaultSettings()
        }),
        mounted() {

        },
        methods: {
        },
        watch: {

        }
    }
</script>
<style scoped>
    .generated_container {
        flex-direction: column;
        align-items: stretch;
    }

    .generated_output {
        width: 100%;
        flex: 1 0;
        margin-top: 10px;
        font-size: 0.95em;
        line-height: 1.6em;
        background-color: #fff;
        border: 2px solid #ccc;
        border-radius: 4px;
        padding: 4px;
    }

    .generated_btn-bar {
        width: 100%;
        height: 50px;
        flex: 0 0;
    }
</style>
