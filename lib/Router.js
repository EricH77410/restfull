Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/',{
  name:'accueil'
});

Router.route('/post/:_id', {
  name:"post",
  data: function(){
    return {
      id: this.params._id
    };
  }
});

Router.route('/band', {
  name:"band"
});

Router.route('/member/:id',{
  name: 'editMember',
  self: this,
  data: function(){
  var query = {};

  Meteor.call('getMember', this.params.id, function(err,data){
      if(err){
        console.log(err);
      } else {
        query.name = data[0].name;
        query.instr = data[0].instr;
        Session.set('member', query);
      }
    });
    return {
      name: Session.get('member').name,
      instr: Session.get('member').instr
    };
  }
});

Router.route('/add/:n1/:n2', {
  name: 'add',
  template: 'calc',
  data: function(){
    var num1 = parseInt(this.params.n1);
    var num2 = parseInt(this.params.n2);

    return {
      res: num1 + num2
    };
  }
});

Router.route('/sub/:n1/:n2', {
  name: 'sub',
  template: 'calc',
  data: function(){
    var num1 = parseInt(this.params.n1);
    var num2 = parseInt(this.params.n2);

    return {
      res: num1 - num2
    };
  }
});

Router.route('/mult/:n1/:n2',{
  name: 'mult',
  template: 'calc',
  data: function(){
    var num1 = parseInt(this.params.n1);
    var num2 = parseInt(this.params.n2);

    return {
      res: num1 * num2
    };
  }
});

Router.route('/div/:n1/:n2', {
  name: 'div',
  template: 'calc',
  data: function(){
    var num1 = parseInt(this.params.n1);
    var num2 = parseInt(this.params.n2);

    return {
      res: num1 / num2
    };
  }
});
