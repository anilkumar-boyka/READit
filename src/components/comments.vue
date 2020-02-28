<template>

  <div class="hello">
    
    


  </div>
</template>

<script>
import snoowrap from 'snoowrap';
import utils from '@/utils.js';

export default {
  name: 'comments',

  data() {
    return {
    
      
    };
  },
  
  mounted:
  	function()
     {
       utils.r.getHot({limit:100}).then(
        data=>console.log(data)
        ).catch(err=>console.log(err))
     }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 
</style>
