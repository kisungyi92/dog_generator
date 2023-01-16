<template>
    <v-container fluid fill-height>
        <v-row style="height: 100%; padding-left: 30px">
            <v-col>
                <v-form>
                    <v-container fluid fill-height justify-start align-start>
                        <v-row>
                            <v-col no-gutters>
                                <v-text-field
                                        :type="'text'"
                                        label="Datadog agent name"
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
                                <v-text-field
                                        :type="'text'"
                                        label="replicas"
                                        v-model="settings.replicas"
                                        class="input-group--focused"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row v-for="type in containerTypes" :key="type">
                            <v-col no-gutters>
                                <v-container fluid>
                                    <v-row>
                                        <v-col no-gutters>
                                            {{type}}
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col no-gutters>
                                            <v-card
                                                    v-for="item in settings[type]"
                                                    :key="item.id"
                                                    class="mx-auto"
                                                    outlined
                                            >
                                                <v-container fluid>
                                                    <v-row>
                                                        <v-col no-gutters>
                                                            <v-text-field
                                                                    :type="'text'"
                                                                    label="name"
                                                                    v-model="item.name"
                                                                    class="input-group--focused"
                                                                    required
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col no-gutters>
                                                            <v-text-field
                                                                    :type="'text'"
                                                                    label="image"
                                                                    v-model="item.image"
                                                                    class="input-group--focused"
                                                                    required
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col no-gutters>
                                                            <v-list-item-content>
                                                                <v-text-field
                                                                        :type="'text'"
                                                                        label="cmd"
                                                                        v-model="item.cmd"
                                                                        class="input-group--focused"
                                                                        required
                                                                ></v-text-field>
                                                                <v-text-field
                                                                        :type="'text'"
                                                                        label="args"
                                                                        v-model="item.args"
                                                                        class="input-group--focused"
                                                                        required
                                                                ></v-text-field>
                                                            </v-list-item-content>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col no-gutters>
                                                            Environments
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col no-gutters>
                                                            <v-card v-for="(env, envIndex) in item.env" :key="item.id + '-env-' + envIndex">
                                                                <v-list-item-content>
                                                                    <v-text-field
                                                                            :type="'text'"
                                                                            label="name"
                                                                            v-model="env.name"
                                                                            class="input-group--focused"
                                                                            required
                                                                    ></v-text-field>
                                                                    <v-text-field
                                                                            :type="'text'"
                                                                            label="value"
                                                                            v-model="env.value"
                                                                            class="input-group--focused"
                                                                            required
                                                                    ></v-text-field>
                                                                </v-list-item-content>
                                                                <v-btn @click="removeEnv(item, envIndex)">DELETE</v-btn>
                                                            </v-card>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col no-gutters>
                                                            <v-btn @click="addEnv(item)">ADD</v-btn>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>

                                                <v-card-actions>
                                                    <v-btn text @click="deleteContainer(type, item)">DELETE</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col no-gutters>
                                            <v-btn @click="addContainer(type)">ADD</v-btn>
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
                        <v-btn @click="loadFrom(genout)">Load From FAKE YAML</v-btn>
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
        "nameOverride": null,
        "fullnameOverride": null,
        "targetSystem": "linux",
        "commonLabels": {},
        "registry": "gcr.io/datadoghq"
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
            name: 'sample-app',
            appLabelKey: 'app',
            appLabelValue: '',
            replicas: '1',

            initContainers: [],
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
            addContainer(type) {
                this.settings[type].push(newContainer());
            },
            deleteContainer(type, item) {
                let index;
                this.settings[type].forEach((o, i) => {
                    if(o.id == item.id) {
                        index = i;
                    }
                });
                this.settings[type].splice(index, 1);
            },
            addEnv(item) {
                item.env.push({
                    name: '',
                    value: ''
                });
            },
            removeEnv(item, index) {
                item.env.splice(index, 1);
            },

            generate() {
                const generated = deepCopy(template);
                const appLabelValue = this.settings.appLabelValue || this.settings.name;

                generated.metadata.name = this.settings.name;
                generated.metadata.labels[this.settings.appLabelKey] = appLabelValue;
                generated.spec.replicas = this.settings.replicas ? parseInt(this.settings.replicas) : 1;
                generated.spec.selector.matchLabels[this.settings.appLabelKey] = appLabelValue;
                generated.spec.template.metadata.labels[this.settings.appLabelKey] = appLabelValue;

                for(let type of this.containerTypes) {
                    for (let item of this.settings[type]) {
                        const generatedEnvs = [];
                        let args = null;

                        for(let env of item.env) {
                            generatedEnvs.push({
                                name: env.name,
                                value: env.value,
                            });
                        }

                        if(item.args) {
                            args = item.args.split(' ');
                        }

                        generated.spec.template.spec[type].push({
                            name: item.name,
                            image: item.image,
                            imagePullPolicy: 'IfNotPresent',
                            resources: {},
                            securityContext: {},
                            env: generatedEnvs,
                            cmd: item.cmd || undefined,
                            args: args,
                            terminationMessagePath: '/dev/termination-log',
                            terminationMessagePolicy: 'File'
                        });
                    }
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
                for(let k in generated.metadata.labels) {
                    settings.appLabelKey = k;
                    settings.appLabelValue = generated.metadata.labels[k];
                    break;
                }
                settings.replicas = generated.spec.replicas;

                for(let type of this.containerTypes) {
                    settings[type] = [];
                    if(generated.spec.template.spec[type]) {
                        for (let item of generated.spec.template.spec[type]) {
                            const args = item.args ? item.args.join(' ') : '';
                            item.args = args;
                            settings[type].push(item);
                        }
                    }
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
