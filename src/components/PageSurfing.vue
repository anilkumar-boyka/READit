<template>
  
	<div class="hello">
		<ol :start="olCount" v-if="titles">

			<li :key="title"v-for="(title,index) in titles">
			  <span class=" icon"><i class="fas fa-arrow-up fa-lg"></i><span class="count">{{upsCount[index]}}</span><i class="fas fa-arrow-down fa-lg"></i></span>

			  <div class="imgText">

			   <img v-on:click="imageLink(olCount+index-1)" class="imgThumbnails" :src="thumbnails[index]">
			   <div class="homeInfo">
				 {{title}}
				 <p class="name">Submitted by {{name[index]}} to {{displayNames[index]}}</p>
			    </div>
			   <p class="comments" v-on:click="comments">{{comments [index]}} comments</p>
			  </div>
			  <hr>
			</li>
	   </ol>
 		<div class="nextPage">
	   		view more:
    		<span v-on:click="pageSurfing"><button type="button">next</button></span>
   		</div>
   
  
   </div>
  </div>

	
 
</template>
<script>
import snoowrap from 'snoowrap';
import utils from '@/utils.js';
export default {
	data(){
		return{
		  titles:[],
		  name:[],
		  comments:[],
		  thumbnails:[],
		  upsCount:[],
		  displayNames:[],
		  pageId:null,
		  key:null,
		  olCount:null
		}
	},
	methods:{
		pageSurfing:function()
		{   
			// console.log('initially'+this.pageId)
			
			this.$router.push({name:'PageSurfing',params:{id:this.pageId +25}}).then(this.pageId=this.$route.params.id).then(console.log(console.log('after'+this.pageId))).catch(error => {
          		if (error.name != "NavigationDuplicated") {
            	throw error;
             	}
        	});
        	// this.pageId=this.$route.params.id;
        	// console.log('after'+this.pageId)

        

		},
		imageLink:function(olCount)
		{	
			// console.log('olCount')
			// console.log(olCount)
        	this.$router.push({name:'ImageLink',params:{id:olCount}}); 
      

		   },
		   commentsFunction:function()
		   {
			 console.log('hello')  
			 console.log(indexId)
			 this.$router.push({name:'comments',params:{id:indexId}}).catch(error => {
				if (error.name != "NavigationDuplicated") {
					throw error;
				}
			 });
		   },
		start:function()
		{ 
		  var l;		
          console.log('yoooo');
          console.log(this.$route.path);
		  this.pageId=this.$route.params.id;
		  l=this.pageId;
		  this.olCount=l+1;
		  console.log('l is'+l)
		  console.log('new util')
	
		 
		  utils.r.getHot({limit:l}).then(data=>
		  {	
		  	 //   console.log('l inside util'+l)
			   // console.log('limit is'+data.length);
			   // console.log(data);
			 data.fetchMore({amount:25}).then(newExtendedData => {
			   // console.log('ext in'+newExtendedData.length);
			   // console.log('new list count')
			   // console.log(newExtendedData);
			   // console.log("title is\n"+newExtendedData[26].title);
			   console.log('loop starts here')
			   for(var i=l;i<newExtendedData.length;i++)
				{ 
				  // console.log('inside loop'+newExtendedData[4].title);
				  this.titles.push(newExtendedData[i].title);
				  
				  this.name.push(newExtendedData[i].author.name);
				  this.comments.push(newExtendedData[i].num_comments);
				  this.thumbnails.push(newExtendedData[i].thumbnail);
				  this.upsCount.push(newExtendedData[i].ups);
				  this.displayNames.push(newExtendedData[i].subreddit.display_name);
				  // console.log('loop')
				   
				}
				 
			 })
		   })



	  },
	},
	mounted()
	 {
	 		this.start();
	 }
  
};
</script>

<style scoped>
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
.nextPage{
  text-align: left;
  padding:20px;
  
}


</style>