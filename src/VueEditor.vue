<template>
    <div >
     <vue-editor v-model="val"></vue-editor>
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
            val
        }
    },
    props: {
        value: {type: String, default: ''}
    },
    watch: {
        value (val) {
            if (this.val !== val) { this.val = val }
        },
        val (val, old) {
            this.$emit('input', val)
        }
   }
}
 </script>