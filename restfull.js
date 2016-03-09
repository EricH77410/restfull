TestData = new Mongo.Collection('test');

if (Meteor.isClient) {
   Template.band.helpers({
     data: function(){
       return TestData.find();
     }
  });

  Template.band.events({
   'click .delete': function(){
     TestData.remove(this._id);
   }
  });


  Template.addForm.events({
   'click .sub': function(){
     var n = $('#name').val();
     var i = $('#instr').val();

     TestData.insert({name: n, instr: i});
     console.log(n + ' : ' + i + ' added');
   }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    getMember: function(id){
      var query = TestData.find({_id: id}).fetch();
      return query;
    }
  });
}
