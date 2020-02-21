<template>

  <div class="hello">
   <ol v-if="titles">
    <li :key="title"v-for="(title,index) in titles">
      {{title}}<br>
      <p>Submitted by {{name[index]}}</p>
      <p>Comments{{comments [index]}}</p>
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
      comments:[]
      
      };
  },
  mounted:
   function()
    { var names;
      var newNames;
      var nameArray=[];
     
      utils.r.getHot().map(post => post).then((data)=>
      {
       console.log(Object.values(data));
       // names=Object.values(data[0].author.name);
       // names=names.toString();
       // newNames=names.replace(/,/g, "");
       // console.log('new names are\n'+newNames);
       // this.name=newNames;
        for(var i=0;i<data.length;i++)
        { 
          console.log(data[i].title);
          console.log(data[i].num_comments);
          this.titles.push(data[i].title);
          // console.log('author name is'+data[i].author.name);
          // names=Object.values(data[i].author.name);
          //  names=names.toString();
          //  newNames=names.replace(/,/g, "");
          //  console.log('new names are\n'+newNames);
           this.name.push(data[i].author.name);
           // console.log("this name is",this.name);
           this.comments.push(data[i].num_comments);

        }
        
       console.log(this.titles)
       
       }).catch(err=>console.log('error is'+err));

    },


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

</style>
