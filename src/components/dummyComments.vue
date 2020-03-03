<template>

  <div class="main">
     <h1 v-if="title"class="title">{{title}}</h1>
     <div>
        <img class="images" :src="images">
      </div>
      <hr>
    
      <ul class="unorderList" v-if="comments">
        <div>
          <li :key="comment" v-for="(comment,index) in comments">
            <div class=comments>
              <i class=" icon fas fa-cog fa-lg"></i><span class="actualComment">{{comment}}</span>
              <i class=" icon fas fa-cog fa-lg"></i> 
              
              <div class="commentName">
                comment by  <span class="name">{{commentName[index]}}</span>
              </div>
            </div>
          </li>
      </div>
    </ul>
    


  </div>
</template>

<script>
import snoowrap from 'snoowrap';
import utils from '@/utils.js';

export default {
  name: 'comments',

  data() {
    return {
     routeId:this.$route.params.id,
     commentId:null,
     comments:[],
     commentName:[],
     title:null,
     images:null,
     score:[]
      
    };
  },
  
  mounted:
  	function()
     {
       // console.log("cmt is")
       // console.log(this.routeId)
       utils.r.getHot({limit:100}).then(
        data=>
        {
          // console.log(data);
          for(var i=0;i<101;i++){
            if(this.routeId==i){
              // console.log(i)
              // console.log('inside')
              this.commentId=data[i].id;
              // console.log(this.commentId)
              this.title=data[i].title;
              this.images=data[i].url;
              
            }
            
          }
          // console.log('commentid')
          // console.log(this.commentId)
          utils.r.getSubmission(this.commentId).expandReplies({limit: 2, depth: 1}).then(CommentData=>
        {
           console.log(CommentData.comments)
           console.log(CommentData.comments[0].ups)
           // console.log(CommentData.comments[1].author.name)
          for(var i=0;i<100;i++)
          {
                this.comments.push(CommentData.comments[i].body);
                this.commentName.push(CommentData.comments[i].author.name)
                this.score.push(CommentData.comments[i].ups)
                // console.log(CommentData.comments[i].body);
                // console.log(CommentData.comments[i].name)
          }
          
        }
        );
        }
        ).catch(err=>console.log(err))
        // comments logic
        //  utils.r.getSubmission('this.commentId').expandReplies({limit: 2, depth: 1}).then(CommentData=>
        // {
        //   for(var i=0;i<100;i++)
        //   console.log(CommentData.comments[i].body);
        // }
        // );
     }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comments{
  text-align: left;
  margin:20px;
  font-family: 'Fredoka One' ;
  color:grey

}
.title{
  font-family: 'Palanquin Dark';
  padding-bottom: 40px;
  text-shadow: 0.8px 0.8px 2px grey;
}
.icon{
  /*min-height: 20px;*/
}
.unorderList{
  list-style-type:none
}
.commentName{
  padding-left: 45px;
  font-family: 'Sorts Mill Goudy';
  color:black;
  /*padding-bottom: 20px;*/
  /*opacity: 0.7;*/
}
.main{
  background-color: #f1f3f4;
}

.images{
  height: 300px;
  width: 500px;
}
.name{
  font-family: 'Rubik Mono One';
  font-size: 12px;
  opacity:0.6;
}
.actualComment{
  padding-left: 30px;
  display: inline-block;
  position: absolute;
}
</style>





