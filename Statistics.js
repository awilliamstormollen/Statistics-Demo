function findSum(x)
{
	var sum = 0;
	for(var i = 0; i < x.length; i++)
	{
		sum += x[i];
	}
	return Math.round((sum) * 100) / 100;
}
function findMean(x)
{
	return  Math.round((findSum(x)/x.length) * 100) / 100;
}

function findN(x)
{
return Math.round((x.length) * 100) / 100;
}

 function findMedian(x)
{
	x.sort(function(a,b)
	{
	return a-b;
	});

	if(x.length === 0) return 0

	var half = Math.floor(x.length / 2);

	if (x.length % 2)
	return x[half];
	else
	return (x[half - 1] + x[half]) / 2.0;
}

function findSD(x)
{
	
    return Math.round(( Math.sqrt(findV(x))   ) * 100) / 100;
}

function findV(x)
{
	var mean = findMean(x);
	var sum = 0;
    	
	for (var i = 0; i < x.length; i++)
        sum += x[i];
 
    	var difference = 0;
    	
	for (var i = 0; i < x.length; i++) 
        difference += (x[i] - mean) * (x[i] - mean);
    	
	return Math.round((difference / x.length) * 100) / 100;
}

function findMode(x)
{
	var mode = 0;
	var count = 0;
	
	for(var i = 0; i < x.length; i++)
	{
		for(var j = 0; j < i; j++)
		{
		  if(x[j] === x[i])
			{
			mode = x[j];
			count++;
			console.log(count);
			}
		}
	}

	  return Math.round((mode) * 100) / 100;

}
