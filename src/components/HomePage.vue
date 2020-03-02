<template>

  <div class="hello">
    <ol v-if="titles">

    <li :key="title"v-for="(title,index) in titles">
      <span class=" icon"><i class="fas fa-arrow-up fa-lg"></i><span class="count">{{upsCount[index]}}</span><i class="fas fa-arrow-down fa-lg"></i></span>

      <div class="imgText">

       <img v-on:click="imageLink(index)" class="imgThumbnails" :src="thumbnails[index]">
       <div class="homeInfo">
        {{title}}
        <p class="name">Submitted on {{dateArray[index]}}
        by {{name[index]}} to {{displayNames[index]}}</p>
       </div>
       <p class="comments" v-on:click="commentPage(index)">{{comments [index]}} comments</p>
      </div>
      <hr>
    </li>
   </ol>
   <div class="nextPage">view more:
    <span v-on:click="pageSurfing"><button type="button">next</button></span>
   </div>
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
      displayNames:[],
      limit:null,
      dateArray:[]
      
      };
  },
  mounted:
   function()
    { 
      var names;
      var newNames;
      var nameArray=[];
      var c;
      var date;
      var hours;
      var today;
      var currentDate;
      var d,n;
      console.log('new util')
      
      // utils.r.getHotComments().then(console.log);
      //starts here
      // utils.r.getHot({limit: 25}).then(myListing => {
      //   console.log(myListing);
      //   console.log(myListing.length); // => 25
      //   myListing.fetchMore({amount: 10}).then(extendedListing => {
      //   console.log(extendedListing.length);
        // console.log('new list count')
        // console.log(extendedListing) // => 35
       // })
       //  });//ends here
      // c=utils.r.getComment('f8ssz0')
      // utils.r.getComment('f8ssz0').then(console.log)
      // c=utils.r.getComment('f8ssz0');

      // utils.submission.comments.fetchMore()
      // console.log("using r new");
      // console.log(c);
     
      utils.r.getHot().map(post => post).then((data)=>
      {

       console.log(Object.values(data));
       console.log(data[0].created_utc)
       date=new Date(data[0].created_utc*1000)
       
       console.log(date)
       
        today = new Date();
        currentDate = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
       
       
        for(var i=0;i<data.length;i++)
        { 
          date=new Date(data[i].created_utc*1000)
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
          this.limit=data.length;
          this.dateArray.push(date);
          console.log('da is'+date)

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
      

    },
    commentPage:function(indexId)
    {
      // console.log('helllo comments')
      // console.log(indexId)
      // this.$router.push({name:'comments'}) 
       this.$router.push({name:'comments',params:{id:indexId}}).catch(error => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
    },
    pageSurfing:function(input)
    { 
      var l=25;
      var count=l+25;
      console.log(input)
      console.log('page');

      // //starts
      // utils.r.getHot({limit: l}).then(myListing => {
      //      console.log('l is'+l);
        // console.log(myListing);
        // // console.log(myListing.length); // => 25
        // myListing.fetchMore({amount: l}).then(extendedListing => {
        //    console.log("ext is \n"+extendedListing.length);
          // console.log('new list count')
          // for(var i=l;i<extendedListing.length;i++)
          // console.log(extendedListing[i])
          this.$router.push({name:'PageSurfing',params:{id:l}}).catch(error => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
                 
         // this.$router.push({name:'PageSurfing'}); 
      //   })
      // });
      //ends
    }
  }


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.nextPage{
  text-align: left;
  padding: 20px;
  
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
