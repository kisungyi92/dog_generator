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
                                        hint="For example, flowers or used cars"
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
                                            label="env Key"
                                            v-model="settings.envKey"
                                            class="input-group--focused"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col no-gutters>
                                    <v-text-field
                                            :type="'text'"
                                            label="env Value"
                                            v-model="settings.envValue"
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
                                        label="integration name"
                                        v-model="settings.intgName"
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
import jsyaml from 'js-yaml'


    const template = {
        "nameOverride": [],
        "clusterName": [],
        "registry":[],
        "datadog": {
            "apiKey":[],
            "appKey":[],
            "logLevel": "INFO",
            kubeStateMetricsEnabled: false,
            kubeStateMetricsNetworkPolicy:{
                create: false
            },
            kubeStateMetricsCore:{
                enabled: true,
                "rbac":{
                    create: true
                },
                ignoreLegacyKSMCheck:true,
                collectSecretMetrics: true,
                collectVpaMetrics: false,
                useClusterCheckRunners: false

            },
            env:[],
            confd: 
                redisdb.yaml: {
                init_config:
                instances:
                    host: "name"
                port: "6379"},
                kubernetes_state.yaml: {
                ad_identifiers:
                    kube-state-metrics
                init_config:
                instances:
                    kube_state_url: http://%%host%%:8080/metrics
                }
        },
    };

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
            clusterName: 'PLEASE_TYPE_YOUR_CLUSTER_NAME',
            registry: 'gcr.io/datadoghq',
            apiKey: 'PLEASE_TYPE_YOUR_API_KEY',
            appKey: 'PLEASE_TYPE_YOUR_APP_KEY',
            containers: [newContainer()]
        };
    }
    function deepCopy(obj) {
        if (obj === null || typeof(obj) !== "object") {
            return obj;
        }

        if(Array.isArray(obj)) {
            let copy = [];
            for (let key in obj) {
                copy.push(deepCopy(obj[key]));
            }
            return copy;
        }else {
            let copy = {};
            for (let key in obj) {
                copy[key] = deepCopy(obj[key]);
            }
            return copy;
        }
    }
    function removeEmptyObject(obj) {
        if(!obj)
            return ;
        for(let k in obj) {
            if(!obj[k]) {
                delete obj[k];
            }else if(typeof obj[k] == 'object') {
                if(Object.keys(obj[k]).length == 0) {
                    delete obj[k];
                }else if(obj[k]) {
                    removeEmptyObject(obj[k]);
                }
            }
        }
    }

    export default {
        data: () => ({
            genout: '',
            containerTypes: ['initContainers', 'containers'],
            settings: defaultSettings()
        }),
        mounted() {
            this.generate();
        },

        methods: {
            addEnv(item) {
                item.env.push({
                    name: '',
                    value: ''
                });
            },
            removeEnv(item, index) {
                item.env.splice(index, 1);
            },
            generate(){
                const generated = deepCopy(template);
                generated.nameOverride = this.settings.name;
                generated.clusterName = this.settings.clusterName;
                generated.registry = this.settings.registry;
                generated.datadog.apiKey = this.settings.apiKey;
                generated.datadog.appKey = this.settings.appKey;
                generated.datadog.kubeStateMetricsEnabled = Boolean("k" | 0);
                generated.datadog.env.push({
                    name: this.settings.envKey,
                    value: this.settings.envValue
                })

                removeEmptyObject(generated);
                this.genout = jsyaml.safeDump(generated, {
                    'styles': {
                        '!!null': 'canonical' // dump null as ~
                    }
                });
            }

        },
        
        watch: {
            settings: {
                deep: true,
                handler() {
                    this.generate();
                }
            }
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
