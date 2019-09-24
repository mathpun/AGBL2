var task;
$(document).ready(function() {

	// Parameters
	var ntask = 16; // how many different tasks (alphabets) are there?
	var nway = 4; // n-way classification tasl
	

	// Selected demo images
	//latin_id = 2;
	Q1_id = 2;
	Q2_id = 3;
	Q3_id = 1;
	Q4_id = 2;
	Q5_id = 4;
	Q6_id = 3;
	Q7_id = 3;
	Q8_id = 2;

	task1a_id = 3;
	task2a_id = 2;
	task3a_id = 4;
	task4a_id = 3;
	task5a_id = 4;
	task6a_id = 1;
	task7a_id = 2;
	task8a_id = 1;
	task9a_id = 4;
	task10a_id = 2;
	task11a_id = 1;
	task12a_id = 3;
	task13a_id = 3;
	task14a_id = 1;
	task15a_id = 2;
	task16a_id = 4;
	

	//took out line 18,19 added line 16, shit, turns out you need spec.list_condition 
	//var spec = {};
	var spec = {};
	spec.list_condition = ['a','a'];

	task = classification(spec);
	var condition = task.getCondition();

	var data = {};
	//data.imglist_test = getlist_test(condition,ntask,nway);
	var inds = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	data.imglist_test = getlist_test(task1a_id,task2a_id,task3a_id,task4a_id,task5a_id,task6a_id,task7a_id,task8a_id,task9a_id,task10a_id,task11a_id,task12a_id,task13a_id,task14a_id,task15a_id,task16a_id,inds);
	data.imglist_list_train = getlist_train(condition,ntask,nway,inds);
	data.imglist_demo = getlist_test_demo(Q1_id,Q2_id,Q3_id,Q4_id,Q5_id,Q6_id,Q7_id,Q8_id,inds);
	data.imglist_list_demo = getlist_train_demo(nway,inds);
	task.load_images(data);
	console.log("imglist_test:"+data.imglist_test);
	console.log("imglist_train:"+data.imglist_list_train);
});

// shuffle I found on stack overflow
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// randomly choose a "test" image for each trial
//var getlist_test = function (type,ntask,nway) {
var getlist_test = function (task1a_id,task2a_id,task3a_id,task4a_id,task5a_id,task6a_id,task7a_id,task8a_id,task9a_id,task10a_id,task11a_id,task12a_id,task13a_id,task14a_id,task15a_id,task16a_id,r) {
    var list = new Array();
    var dname = 'images_classif/';
//  	list[0] = dname + 'latin_test' + latin_id + '.png';
    list[r[0]] = dname + 'task1a_test' + task1a_id + '.png';
    list[r[1]] = dname + 'task2a_test' + task2a_id + '.png';
    list[r[2]] = dname + 'task3a_test' + task3a_id + '.png';
    list[r[3]] = dname + 'task4a_test' + task4a_id + '.png';
    list[r[4]] = dname + 'task5a_test' + task5a_id + '.png';
    list[r[5]] = dname + 'task6a_test' + task6a_id + '.png';
    list[r[6]] = dname + 'task7a_test' + task7a_id + '.png';
    list[r[7]] = dname + 'task8a_test' + task8a_id + '.png';
    list[r[8]] = dname + 'task9a_test' + task9a_id + '.png';
    list[r[9]] = dname + 'task10a_test' + task10a_id + '.png';
    list[r[10]] = dname + 'task11a_test' + task11a_id + '.png';
    list[r[11]] = dname + 'task12a_test' + task12a_id + '.png';
    list[r[12]] = dname + 'task13a_test' + task13a_id + '.png';
    list[r[13]] = dname + 'task14a_test' + task14a_id + '.png';
    list[r[14]] = dname + 'task15a_test' + task15a_id + '.png';
    list[r[15]] = dname + 'task16a_test' + task16a_id + '.png';
    return list;
};

// enumerate the image set which is the training images
var getlist_train = function (type,ntask,nway,r) {
    var list = new Array();
    var dname = 'images_classif/';
	
    list[r[0]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[0]][c-1] = dname + 'task1a_train' + c + '.png';
    }
	
    list[r[1]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[1]][c-1] = dname + 'task2a_train' + c + '.png';
    }	
	
    list[r[2]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[2]][c-1] = dname + 'task3a_train' + c + '.png';
    }	
	
    list[r[3]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[3]][c-1] = dname + 'task4a_train' + c + '.png';
    }	
	
	
    list[r[4]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[4]][c-1] = dname + 'task5a_train' + c + '.png';
    }
	
    list[r[5]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[5]][c-1] = dname + 'task6a_train' + c + '.png';
    }
		
    list[r[6]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[6]][c-1] = dname + 'task7a_train' + c + '.png';
    }	
	
	
    list[r[7]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[7]][c-1] = dname + 'task8a_train' + c + '.png';
    }
	
    list[r[8]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[8]][c-1] = dname + 'task9a_train' + c + '.png';
    }
	
    list[r[9]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[9]][c-1] = dname + 'task10a_train' + c + '.png';
    }
	
    list[r[10]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[10]][c-1] = dname + 'task11a_train' + c + '.png';
    }
	
    list[r[11]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[11]][c-1] = dname + 'task12a_train' + c + '.png';
    }
	
    list[r[12]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[12]][c-1] = dname + 'task13a_train' + c + '.png';
    }
	
    list[r[13]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[13]][c-1] = dname + 'task14a_train' + c + '.png';
    }
	
    list[r[14]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[14]][c-1] = dname + 'task15a_train' + c + '.png';
    }
	
    list[r[15]] = new Array();
    for (var c=1; c <= nway; c++ ) {
  	    list[r[15]][c-1] = dname + 'task16a_train' + c + '.png';
    }
    return list;
};

// Get just the two test images for the demo
var getlist_test_demo = function (Q1_id,Q2_id,Q3_id,Q4_id,Q5_id,Q6_id,Q7_id,Q8_id,r) {
	var list = new Array();
	var dname = 'images_classif_demo/';
//  	list[0] = dname + 'latin_test' + latin_id + '.png';
	list[r[0]] = dname + 'Q1_test' + Q1_id + '.png';
	list[r[1]] = dname + 'Q2_test' + Q2_id + '.png';
	list[r[2]] = dname + 'Q3_test' + Q3_id + '.png';
	list[r[3]] = dname + 'Q4_test' + Q4_id + '.png';
	list[r[4]] = dname + 'Q5_test' + Q5_id + '.png';
	list[r[5]] = dname + 'Q6_test' + Q6_id + '.png';
	list[r[6]] = dname + 'Q7_test' + Q7_id + '.png';
	list[r[7]] = dname + 'Q8_test' + Q8_id + '.png';
	return list;
};

// Get two lists of training images
var getlist_train_demo = function (nway,r) {
	var list = new Array();
	var dname = 'images_classif_demo/';
//

	list[r[0]] = new Array();
	for (var c=1; c <= nway; c++ ) {
  		list[r[0]][c-1] = dname + 'Q1_train' + c + '.png';
    }

	list[r[1]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[1]][c-1] = dname + 'Q2_train' + c + '.png';
	  }

	list[r[2]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[2]][c-1] = dname + 'Q3_train' + c + '.png';
	  }
	
	list[r[3]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[3]][c-1] = dname + 'Q4_train' + c + '.png';
	  }
	
	list[r[4]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[4]][c-1] = dname + 'Q5_train' + c + '.png';
	  }
	
	list[r[5]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[5]][c-1] = dname + 'Q6_train' + c + '.png';
	  }
	
	list[r[6]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[6]][c-1] = dname + 'Q7_train' + c + '.png';
	  }
	
	list[r[7]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[7]][c-1] = dname + 'Q8_train' + c + '.png';
	  }
	
	return list;
};
