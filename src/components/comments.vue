<template>

  <div class="main">
    {{upvoteId}}
     <h1 v-if="title"class="title">{{title}}</h1>
     <div>
        <img class="images" :src="images">
      </div>
      <hr>
    
      <ul class="unorderList" v-if="comments">
        <div class="group">
          <li :key="comment" v-for="(comment,index) in comments">
            <div class=comments>
              <span v-on:click="commentUpvote(index)" :class="{red:true}">
                <i class=" icon fas fa-cog fa-lg" ></i>
              </span>
              <span class="actualComment">{{comment}}
              <div class="commentName">
                comment by  <span class="name">{{commentName[index]}}</span>
                <span class="score">{{score[index]}} points</span>
              </div></span><br>
               <span v-on:click="commentDownvote(index)" :class="{blue:true}">
                <i class=" icon fas fa-cog fa-lg"></i> 
              </span>
              
              
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
     score:[],
     upvoteId:0,
     downvoteId:[20,30,40]
      
    };
  },
  
  mounted:
    function()
     {
       // utils.r.getComment('fje1w1m').upvote();
       // utils.r.getComment('fje1w1m').downvote();
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
     },

  methods:{
    commentUpvote:function(index)
    { var n=[];
      console.log('upvote')
      console.log(index)
      console.log(this.commentId)
          utils.r.getSubmission(this.commentId).expandReplies({limit: 2, depth: 1}).then(CommentData=>
        {
          for(var i=0;i<50;i++){
           if(i==index)
            {
              utils.r.getComment(CommentData.comments[i].id).upvote(); 
              console.log(CommentData.comments[i].id)
              console.log('score is')
              console.log(this.score[index])
              console.log('after click')
              n=this.score[index]++
              console.log(n)
              this.upvoteId++;
              this.downvoteId[index]++;
            }
          } 
          }
        ).catch(err=>console.log('error is'+err))

    },
    commentDownvote:function(index)
    {
      console.log('downvote')
      console.log(index)
      console.log(this.commentId)
          utils.r.getSubmission(this.commentId).expandReplies({limit: 2, depth: 1}).then(CommentData=>
        {
          for(var i=0;i<100;i++){
           if(i==index)
            {
              utils.r.getComment(CommentData.comments[i].id).downvote(); 
              console.log(CommentData.comments[i].id)
            }
          } 
          }
        ).catch(err=>console.log('error is'+err))

    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comments{
  text-align: left;
  margin:20px;
  font-family: 'Fredoka One' ;
  color:grey;
  padding: 10px;

}
.title{
  font-family: 'Palanquin Dark';
  padding-bottom: 40px;
  text-shadow: 0.8px 0.8px 2px grey;
}
.icon{
  padding-right: 20px;
  min-height: 20px;
}
.unorderList{
  list-style-type:none
}
.commentName{
  /*padding-left: 25px;*/
  font-family: 'Sorts Mill Goudy';
  color:black;
  padding-bottom: 20px;
  /*opacity: 0.7;*/
  position: absolute;
  /*padding-left: 70px;*/
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
}
.score{
  /*font-family: 'Sorts Mill Goudy';*/
  font-family: 'Dosis', sans-serif;
  display: inline-block;
  margin-left :20px;
  color:grey;
  opacity: 0.7;
  font-size: small;
}
.red{
  color:#ff6464;
}
.blue{
  color:#3fc5f0;
}
</style>





