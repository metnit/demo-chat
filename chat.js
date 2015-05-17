$(function(){	
	var input = $('#detail');
	var name = $('#name');
	var ul = $('ul');
	var ip = '';
	var firebaseUrl = 'https://metnit-comment.firebaseio.com';
	var commentRef = new Firebase(firebaseUrl).child('comment');
	listenToFirebase();
	
	$.getJSON('http://jsonip.com/?callback=?', function(r){
	 ip = r;
	});
	
		input.keypress(function(e){
			if(e.which == 13  ) {
				if( name.val().length === 0 ) {
					$('#div2').addClass('has-error');
				}else if( $(this).val().length ===0){
					$('#div3').addClass('has-error');
				}else{
				
				var insert = {
					name : name.val(),
					text : input.val(),
					ip : ip.ip
					};
				
					commentRef.push(insert);
					input.val("");	
					$('#div2').removeClass('has-error');
					$('#div3').removeClass('has-error');
					input.attr("readonly", "readonly"); 
					setTimeout(function(){ input.removeAttr('readonly'); }, 3000);
					}
			}					
			});
			
			function listenToFirebase(){
			$( document ).ready(function() {	
				commentRef.on('value',function(snapshot){
				var newPost = snapshot.val();
				ul.empty(); 
				if (newPost !== null) {
					$.each(newPost , function( index, post){
						if(post.ip == ip.ip){
							addToListUser(post.text + ' : '+'['+ post.name +']' )	
						}else{
							addToList('['+ post.name +']'+' : '+ post.text)
						}
						});
						
						$(".div1").animate({ scrollTop: $('.div1')[0].scrollHeight}, 1000);
					}  
					});
				});
			}
			function addToList(post){
				var li = '<li class="list-group-item"><span class="glyphicon glyphicon-user"></span> '+ post + '</li>';
				ul.append(li);
			}
			function addToListUser(post){
				var li = '<li class="list-group-item" align="right">'+ post + ' <span class="glyphicon glyphicon-user"></span></li>';
				ul.append(li);
			}
});