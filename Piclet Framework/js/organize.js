//To set up priority queue testing
//var pq = new buckets.PriorityQueue(compareImportance)
//for (var key in photoArray) pq.enqueue(photoArray[key])
function PQueueInit(){
    //buckets.PriorityQueue(compareImportance);
    return new buckets.PriorityQueue();
}


function compareImportance(a, b){
    var aValue = importanceFactor(a),
        bValue = importanceFactor(b);
    if (aValue < bValue)
        return -1;
    if (aValue > bValue)
        return 1;
    else
        return 0;
}

function enqueueArray(photoArray, pq){
    for (var key in photoArray.data)
        pq.enqueue(photoArray.data[key]);
}

function dequeueAll(pq){
    var photos = [];
    while (!pq.isEmpty()){
        photos[photos.length] = pq.dequeue();
    }
    return photos;
}

function dequeueImportant(pq){
	var photos = [];
	while (!pq.isEmpty()){
		var nextPhoto = pq.dequeue();
		if (importanceFactor(nextPhoto) == 0) break;
		photos[photos.length] = nextPhoto;
	}
	return photos;
}
