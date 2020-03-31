-------------------------------------------------------------

### DISPLAY INFORMATION

-------------------------------------------------------------

> #### void disp( object )
> this function displays a stringified object to the standard output.
> - **@parameter** : object - any variable that can be converted into  string
> - **@return**    : N/A

> #### void debug ( object )
> this function displays a stringified object to the standard error.
> If the object is a list, it displays each entry on a new single line.
> - **@parameter** : object - any variable that can be converted into  string
> - **@return**    : N/A

-------------------------------------------------------------

#### INPUT FUNCTIONS

-------------------------------------------------------------

> ### list<int> | int **getInt**( int n=1 )
> Returns a simple integer value from the stdin.
> It can return an array of integers from the stdin (each integer value is on a different line).  
> The 'n' (optional) parameter is strictly positive, and represents the count of lines to retrieve.
> If 'n' equals to '1', the result is a simple integer, if greater, the result is an integer list.  
> - **@parameter** : n - optional positive parameter with default value to 1.
> - **@return**    : integer value (or list of integers)

 
 


