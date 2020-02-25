<template>

  <div class="hello">
    <ol v-if="titles">

    <li :key="title"v-for="(title,index) in titles">
      <span class=" icon"><i class="fas fa-arrow-up fa-lg"></i><span class="count">{{upsCount[index]}}</span><i class="fas fa-arrow-down fa-lg"></i></span>

      <div class="imgText">

       <img v-on:click="imageLink(index)" class="imgThumbnails" :src="thumbnails[index]">
       <div class="homeInfo">
        {{title}}
        <p class="name">Submitted by {{name[index]}} to {{displayNames[index]}}</p>
       </div>
       <p class="comments">{{comments [index]}} comments</p>
      </div>
      <hr>
    </li>
   </ol>
  </div>
</template>

<script>
import snoowrap from 'snoowrap';
import utils from '@/utils.js';


export default {
  name: 'HomePage',
  data() {
    return {
      
      titles:[],
      name:[],
      comments:[],
      thumbnails:[],
      upsCount:[],
      displayNames:[]
      
      };
  },
  mounted:
   function()
    { 
      var names;
      var newNames;
      var nameArray=[];
      var c;
      console.log('new util')
      // utils.r.getHotComments().then(console.log);
      //starts here
      utils.r.getHot({limit: 25}).then(myListing => {
        console.log(myListing);
        console.log(myListing.length); // => 25
        myListing.fetchMore({amount: 10}).then(extendedListing => {
        console.log(extendedListing.length);
        console.log('new list count')
        console.log(extendedListing) // => 35
       })
        });//ends here
      // c=utils.r.getComment('f8ssz0')
      // utils.r.getComment('f8ssz0').then(console.log)
      // c=utils.r.getComment('f8ssz0');

      // utils.submission.comments.fetchMore()
      // console.log("using r new");
      console.log(c);
     
      utils.r.getHot().map(post => post).then((data)=>
      {
       console.log(Object.values(data));
       console.log('comments');
       console.log();

       
        for(var i=0;i<data.length;i++)
        { 
          // console.log(data[i].title);
          // console.log(data[i].num_comments);
          this.titles.push(data[i].title);
          // console.log('author name is'+data[i].author.name);
          // names=Object.values(data[i].author.name);
          //  names=names.toString();
          //  newNames=names.replace(/,/g, "");
          //  console.log('new names are\n'+newNames);
           this.name.push(data[i].author.name);
           // console.log("this name is",this.name);
           this.comments.push(data[i].num_comments);
           this.thumbnails.push(data[i].thumbnail);
           this.upsCount.push(data[i].ups);
           this.displayNames.push(data[i].subreddit.display_name);

        }
        
       // console.log(this.titles)
       
       }).catch(err=>console.log('error is'+err));

  },
  methods:{
    imageLink:function(indexId){
      // console.log('hello img clicked');
      // utils.r.getHot().map(post => post).then((data)=>
      // {
      //  r.getSubreddit('snoowrap').getNewComments().then(console.log);
      // });
      // console.log("input indexId");
      // console.log(indexId);
      this.$router.push({name:'ImageLink',params:{id:indexId}}); 
      

    }
  }


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  
  
}
li {
        
  text-align:left;
  padding:10px 0px 20px 0px; 
}
img{
  float: left;
}
.homeInfo{
  margin-left: 190px;
  font-size: 13px;
}
.comments{
  margin-left: 190px;
  font-family: 'Anton';
  font-size: small;
  font-size: 10px;
}
.name{
  color: #888;
  margin-bottom: 10px;
  font-size: 12px;
}
.imgThumbnails{
  width: 100px;
  height: 80px;
  padding-left: 10px;
}
.icon{
  color:#888;
  float: left;
}
.count{
  min-width: 45px;
  display: inline-block;
  padding:0px  2px 0 2px;
}
.imgText{
  margin-left: 19px;
}
.hello{
  background-color: #f6eec7;
}
</style>
