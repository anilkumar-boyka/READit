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
     

      // const comments = new CommentStream(utils.r, { subreddit: "Justrolledintotheshop", limit: 10,pollTime: 10000});
      // comments.on('item', (item) => {
        
      //     console.log(item);
      //     utils.r.getComment(item.parent_id).fetch().then(parentComment => {
      //         console.log(parentComment.body);
      //     });
      // });
       utils.r.getSubmission('fald9v').expandReplies({limit: 2, depth: 1}).then(CommentData=>
        {
          for(var i=0;i<100;i++)
          console.log(CommentData.comments[i].body);
        }
        );
      //   comments.on("item", console.log);
        console.log('commens section')
        // console.log(utils.r.getComment('t1_f37dwqc'));
        // console.log('try')
        // console.log(utils.r.getComment('yo'));
        console.log('using username')
        // utils.r.getHot().then(sumbission =>{submission.comments.fetchMore()}
        // utils.r.getHot().then(listing => {
        //   console.log(listing)
        //   console.log(listing.map(c => c.id))
        // })
        // utils.r.getUser('c0hkuyq').getComments().then(console.log)
        // console.log(utils.r.getComment('c0hkuyq')); 
        // console.log(utils.r.getComment('t1_c0hkuyq'));
        // console.log('new')
        // utils.r.getComment('c0b6xx0').fetch().then(comment => comment.body).then(console.log)
        // console.log(utils.r.getComments); 
        //json data
        // $.getJSON("http://www.reddit.com/r/" + 'JustrolledintotheshopJustrolledintotheshop' + "/comments/" + 'c0hkuyq'+ ".json?", function (data){
        //   console.log('data is')
        //   console.log(data)
        //   $.each(data[1].data.children, function (i, item) {
        //     var comment = item.data.body
        //     var author = item.data.author
        //     var postcomment = '<p>[Author]' + author + '<br>' + comment + '</p>'
        //     results.append(postcomment)
        //   });
        // });
        //json data ends here
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
