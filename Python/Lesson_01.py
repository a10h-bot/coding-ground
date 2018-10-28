def binary_search(arr,value):
      start=0
      end=len(arr)-1
      while start<=end :
           mid=start+end/ 2 
           if arr[mid]==value:
              return mid
           elif arr >arr[mid] :
               start = mid+1
           else:
              end = mid-1

A =[1,4,7,8,9,10]
x=binary_search(A,7)
print(x)

