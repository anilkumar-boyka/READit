<template>

  <div class="hello">
    <!-- imageLink{{imgId}} -->
    <div :key="image"v-for="(image,index) in images">
      <div v-if="imgId==index">
        <img :src="images[index]">
      </div>
    </div>


  </div>
</template>

<script>
import snoowrap from 'snoowrap';
import utils from '@/utils.js';
import { InboxStream, CommentStream, SubmissionStream } from "snoostorm";

export default {
  name: 'HomePage',
  props:['id'],
  data() {
    return {
    	imgId:this.$route.params.id,
      images:[]
    };
  },
  
  mounted:
  	function()
  	{ 
      const comments = new CommentStream(utils.r, { subreddit: "AskReddit", limit: 10,pollTime: 10000});
        comments.on("item", console.log);

      utils.r.getHot({limit:1}).then(data=>
      { 
         // console.log('l inside util'+l)
         // console.log('limit is'+data.length);
         // console.log(data);
       data.fetchMore({amount:100}).then(newExtendedData => {
         // console.log('ext in'+newExtendedData.length);
         // console.log('new list count')
         // console.log(newExtendedData);
         // console.log("title is\n"+newExtendedData[26].title);
         // console.log('loop starts here')
         for(var i=0;i<newExtendedData.length;i++)
        { 
          // console.log('inside loop'+newExtendedData[4].title);
          
          this.images.push(newExtendedData[i].url);
          
          // console.log('loop')
           
        }
         
       })
       }).catch(err=>console.log('error is'+err));
      
      // console.log('imgId is\n'+this.imgId)
  	// utils.r.getHot().map(post => post).then((data)=>
    //   {
    //     console.log('dataAhead')
    //     // console.log(data[25].url);
    //     for(var i=0;i<data.length;i++)
    //     { 
    //       this.images.push(data[i].url);
    //     }

    //   }).catch(err=>console.log('error is'+err));
  		
  	}
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 
</style>
