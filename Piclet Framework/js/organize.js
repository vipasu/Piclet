/**
 * Functions that work with the priority queue to sort photos.
 */

//To initialize a new priority queue use:
//var pq = new buckets.PriorityQueue(compareImportance)
function PQueueInit() {
	return new buckets.PriorityQueue();
}

function compareImportance(a, b) {
	var aValue = importanceFactor(a), bValue = importanceFactor(b);
	if (aValue < bValue)
		return -1;
	if (aValue > bValue)
		return 1;
	else
		return 0;
}

function enqueueArray(photoArray, pq) {
	for (var key in photoArray.data)
	pq.enqueue(photoArray.data[key]);
}

function dequeueAll(pq) {
	var photos = [];
	while (!pq.isEmpty()) {
		photos[photos.length] = pq.dequeue();
	}
	return photos;
}

function dequeueImportant(pq) {
	var photos = [];
	while (!pq.isEmpty()) {
		var nextPhoto = pq.dequeue();
		if (importanceFactor(nextPhoto) == 0)
			break;
		photos[photos.length] = nextPhoto;
	}
	return photos;
}
