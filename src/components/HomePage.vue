<template>

  <div class="hello">
    {{name}}
    <!-- {{titles}} -->
   
   <!-- <ul>
    <li :v-for="title in titles">{{title}}</li>
   </ul> -->
  <!-- <h4 v-on:click="click">clickMe</h4> -->

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
      name:null
      };
  },
  mounted:
   function()
    {
      var title=[];
      var name1;
      this.name;
      alert('hello');
      utils.r.getHot().map(post => post.title).then((data)=>
      {
        title.push(data);
        console.log('pushed data inside'+title);
        console.log('one yo'+title[0]);

        console.log('data is'+data);
       this.titles.push(data);
        name1="anil";
        console.log(name1);
        console.log('tttt'+this.titles[2]);

      }).catch(err=>console.log(err));
      this.name=name1;
      console.log(this.name);

      
      utils.r.getHot().map(post => post.title).then(
        (data)=>console.log(data[1]))
       
        
      
    
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
