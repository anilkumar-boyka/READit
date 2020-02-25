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
    // r.getSubreddit('snoowrap').getNewComments().then(console.log)
      
    };
  },
  
  mounted:
  	function()
  	{
      utils.r.getSubreddit('snoowrap').getNewComments().then(console.log);
  		utils.r.getHot().map(post => post).then((data)=>
      {
        console.log('dataAhead')
        // console.log(data[25].url);
        for(var i=0;i<data.length;i++)
        { 
          this.images.push(data[i].url);
        }

      }).catch(err=>console.log('error is'+err));
  		
  	}
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 
</style>
