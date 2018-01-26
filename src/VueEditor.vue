<template>
    <div >
     <vue-editor :id="id" v-model="val"></vue-editor>
   </div>
</template>
<script>
   import { VueEditor } from 'vue2-editor'

   export default {

    components: {
        VueEditor
        },
        data() {
            var val = this.value;
            return {
                val,
                valid: null
            }
        },
        props: {
            id:'',
            value: { type: String, default: '' },
            required: { type: Boolean, default: null },
        },
        methods: {
            validate () {
                if(this.required){
                    if(this.val.replace(/<.+?>/g, '') === "") 
                        return false;
                }
                return true;
            }
        },
        watch: {
            value (val) {
                if (this.val !== val) { this.val = val }
            },
            val (val, old) {
                this.$emit('input', val);
                this.valid = this.validate();   
            },
            valid (val, old) {
                this.$emit('isvalid', val)
                this.$emit(!val ? 'invalid' : 'valid')
                if (this._parent) this._parent.validate();
            }
        }
    }
 </script>