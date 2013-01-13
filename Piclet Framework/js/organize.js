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

function enqueueArray(photoArray){
    for (photo in photoArray)
        buckets.PriorityQueue.prototype.enqueue(photo);
}

function dequeueAll(){
    var temp;
    while (!buckets.PriorityQueue.prototype.isEmpty()){
        temp =buckets.PriorityQueue.prototype.dequeue();
        console.log(temp);
    }
}
