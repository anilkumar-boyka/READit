<template>

  <div>
    <h1 class="title">{{title}}</h1>
    
    <ul class="unorderList" v-if="comments">
      <li :key="title" v-for="(comment,index) in comments">
        <div>

        </div>
        <div class=comments><i class=" icon fas fa-cog fa-lg"></i> {{comment}}
        <div class=commentName>comment by {{commentName[index]}}</div>
        </div>
      </li>
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
     title:null
      
    };
  },
  
  mounted:
  	function()
     {
       console.log("cmt is")
       console.log(this.routeId)
       utils.r.getHot({limit:100}).then(
        data=>
        {
          console.log(data);
          for(var i=0;i<101;i++){
            if(this.routeId==i){
              console.log(i)
              console.log('inside')
              this.commentId=data[i].id;
              console.log(this.commentId)
              this.title=data[i].title;
              
            }
            
          }
          console.log('commentid')
          console.log(this.commentId)
          utils.r.getSubmission(this.commentId).expandReplies({limit: 2, depth: 1}).then(CommentData=>
        {
           console.log(CommentData.comments)
           console.log(CommentData.comments[1].author.name)
          for(var i=0;i<100;i++)
          {
                this.comments.push(CommentData.comments[i].body);
                 this.commentName.push(CommentData.comments[i].author.name)
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
}
.icon{
  padding-right: 20px;
}
.unorderList{
  list-style-type:none
}
.commentName{
  padding-left: 40px;
  font-family: 'Squada One';
  color:black;
}
</style>
