<template>
    <v-container fluid fill-height>
        <v-row style="height: 100%; padding-left: 24px">
            <v-col>
                <v-form>
                    <v-container fluid fill-height justify-start align-start>
                        <v-row>
                            <v-col no-gutters>
                                <v-text-field
                                        :type="'text'"
                                        label="service name"
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
                        <v-row>
                            <v-col no-gutters>
                                <v-select v-model="settings.type" :items="types">
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col no-gutters>
                                <v-container fluid>
                                    <v-row>
                                        <v-col no-gutters>
                                            <v-card
                                                    v-for="item in settings.ports"
                                                    :key="item.id"
                                                    class="mx-auto"
                                                    outlined
                                            >
                                                <v-container fluid>
                                                    <v-row cols="10">
                                                        <v-col no-gutters>
                                                            <v-list-item-content>
                                                                <v-text-field
                                                                        :type="'text'"
                                                                        label="name"
                                                                        v-model="item.name"
                                                                        class="input-group--focused"
                                                                        required
                                                                ></v-text-field>
                                                                <v-select v-model="item.protocol" :items="protocols"></v-select>
                                                            </v-list-item-content>
                                                        </v-col>
                                                        <v-col cols="2">
                                                            <v-btn @click="deletePort(item)">DELETE</v-btn>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col no-gutters>
                                                            <v-list-item-content>
                                                                <v-text-field
                                                                        :type="'text'"
                                                                        label="port"
                                                                        v-model="item.port"
                                                                        class="input-group--focused"
                                                                        required
                                                                ></v-text-field>
                                                                <v-text-field
                                                                        :type="'text'"
                                                                        label="targetPort"
                                                                        v-model="item.targetPort"
                                                                        class="input-group--focused"
                                                                        required
                                                                ></v-text-field>
                                                            </v-list-item-content>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col no-gutters>
                                            {{type}} <v-btn @click="addPort()">ADD</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-col>
            <v-col no-gutters>
                <v-container fluid fill-height class="generated_container">
                    <div class="generated_btn-bar">
                        <v-btn @click="loadFrom(genout)">Load From YAML</v-btn>
                    </div>
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
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
        },
        "spec": {
            "ports": [],
            "selector": {
            }
        }
    };

    function defaultPort() {
        return {
            id: uuidv4(),
            name: 'http',
            protocol: 'TCP',
            port: '80',
            targetPort: '80'
        }
    }

    function newPort() {
        return {
            id: uuidv4(),
            name: '',
            protocol: 'TCP',
            port: '',
        }
    }

    function defaultSettings() {
        return {
            name: 'sample-app',
            appLabelKey: 'app',
            appLabelValue: '',
            type: 'ClusterIP',
            ports: [defaultPort()]
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
            types: ['ClusterIP', 'NodePort', 'LoadBalancer'],
            protocols: ['TCP', 'UDP'],
            settings: defaultSettings()
        }),
        mounted() {
            this.generate();
        },
        methods: {
            addPort() {
                this.settings.ports.push(newPort());
            },
            deletePort(item) {
                let index;
                this.settings.ports.forEach((o, i) => {
                    if(o.id == item.id) {
                        index = i;
                    }
                });
                this.settings.ports.splice(index, 1);
            },
            generate() {
                const generated = deepCopy(template);
                const appLabelValue = this.settings.appLabelValue || this.settings.name;

                generated.metadata.name = this.settings.name;
                generated.spec.selector[this.settings.appLabelKey] = appLabelValue;
                generated.spec.ports = deepCopy(this.settings.ports);
                for(let item of generated.spec.ports) {
                    item.port = parseInt(item.port);
                    item.targetPort = parseInt(item.targetPort);
                    delete item['id'];
                }

                removeEmptyObject(generated);

                this.genout = jsyaml.safeDump(generated, {
                    'styles': {
                        '!!null': 'canonical' // dump null as ~
                    }
                });
            },
            loadFrom(yamlText) {
                const generated = jsyaml.safeLoad(yamlText);
                const settings = defaultSettings();

                settings.name = generated.metadata.name;
                for(let k in generated.spec.selector) {
                    settings.appLabelKey = k;
                    settings.appLabelValue = generated.spec.selector[k];
                    break;
                }
                settings.ports = generated.spec.ports;

                for(let item of settings.ports) {
                    item['id'] = uuidv4();
                }

                this.settings = settings;
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
