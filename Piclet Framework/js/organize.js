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
    for (var key in photoArray)
        pq.enqueue(photoArry[key]);
}

function dequeueAll(pq){
    var temp;
    while (!pq.isEmpty()){
        temp =pq.dequeue();
        console.log(temp);
    }
}
