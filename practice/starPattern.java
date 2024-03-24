/* Right Half Pyramid Pattern

*  
* *  
* * *  
* * * *  

*/

/*
javascript 
for(i=1 ; i<=5 ; i++){
    for(j=1;j<=i;j++){
        // console.log("*");
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}
 
*/

/* 
public class starPattern {
    public static void main(String args[]) {
        // i for rows and j for columns
        // row denotes the number of rows you want to print
        int i, j, row = 6;
        // outer loop for rows
        for (i = 0; i < row; i++) {
            // inner loop for columns
            for (j = 0; j <= i; j++) {
                // prints stars
                System.out.print("* ");
            }
            // throws the cursor in a new line after printing each line
            System.out.println();
        }
    }
}

*/

/*  Reverse Right Half Pyramid Pattern

******
*****
****
***
**
*



public class starPattern {
    public static void main(String args[]) {

        int i, j, row = 5;

        for (i = 1; i <= row; i++) {
            for (j = i; j <= row; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
*/

/* Left Half Pyramid Pattern
     *
    **
   ***
  ****
 *****
******


public class starPattern {
    public static void main(String args[]) {
        int i, j, k, row = 5;
        for (i = 1; i <= row; i++) {
            for (j = i; j <= row; j++) {
                System.out.print("  ");
            }
            for (k = 1; k <= i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
*/

/* Reverse Left Half Pyramid Pattern
******
 *****
  ****
   ***
    **
     *


// import java.util.Scanner;

public class starPattern {
    public static void main(String args[]) {
        // Scanner scanner = new Scanner(System.in);
        // System.out.println("Enter row ");
        // int row = scanner.nextInt();
        int i, j, k, row = 5;
        for (i = 1; i <= row; i++) {
            for (j = 1; j <= i; j++) {
                System.out.print("  ");
            }
            for (k = i; k <= row; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
*/

/* Hill/Triangle Star Pattern
     *
    ***
   *****
  *******
 *********


 public class starPattern {
   
        public static void userIntput(int n){
            int i,j,k,l;
            for(i = 1; i<= n; i++){
                for(j = i; j<= n;j++){
                    System.out.print("  ");
                }

                for(k = 1; k< i;k++){  // 141 and 144 for loop ke badle ye ek for loop for(int j = 1; j<=2*i-1; j++){
                    System.out.print("* ");
                }
                for(l = 1; l<= i;l++){
                    System.out.print("* ");
                }
                System.out.println();
            }
        }
            public static void main(String args[]) {
                userIntput(5);
        }
       

    }
     */

/* Reverse Hill/Triangle Star Pattern
     
    * * * * * * * * * 
      * * * * * * * 
        * * * * * 
          * * * 
            * 


public class starPattern{

   public static void main(String args[]){
       int i,j,k,l, n= 5;
       for(i = 1;i<=n;i++){
           for(j=1;j<=i;j++){
               System.out.print("  ");
           }
           for(k = i; k < n;k++){
               System.out.print("* ");
           }
           for(l = i; l<= n;l++){
               System.out.print("* ");
           }
           System.out.println();
       }
       }
   }
*/

/* Diamond Star Pattern
     *
    ***
   *****
  *******
 *********
***********
 *********
  *******
   *****
    ***
     *


 public class starPattern{

    public static void main(String args[]){
        int i,j,k,l, n= 5;

        for(i = 1; i < n; i++){
            for(j = i; j<= n;j++){
                System.out.print("  ");
            }
            for(k = 1; k< i;k++){
                System.out.print("* ");
            }
            for(l = 1; l<= i;l++){
                System.out.print("* ");
            }
            System.out.println();
        }

        
        for(i = 1;i<=n;i++){
            for(j=1;j<=i;j++){
                System.out.print("  ");
            }
            for(k = i; k < n;k++){
                System.out.print("* ");
            }
            for(l = i; l<= n;l++){
                System.out.print("* ");
            }
            System.out.println();
        }

        
        }
    }
*/

/* double pyramid/hill pattern 
     *      * 
    * *     * *
   * * *    * * *
  * * * *   * * * *
 * * * * *  * * * * *
public class starPattern {

    public static void main(String args[]){
        int i,j,k,l,m ,n=5;

        for(i =1 ; i<=n; i++){
            for(j=i ; j<=n;j++){
                System.out.print(" ");
            }
            for(k = 1; k <= i; k++){
                System.out.print("* ");
            }
            for(l=i ; l<=n;l++){
                System.out.print(" ");
            }
            for(m = 1; m <= i; m++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
*/

/*
 Right Pascal’s Triangle

* 
* * 
* * * 
* * * * 
* * * 
* * 
* 

public class starPattern {

    public static void main(String[] args) {
        int i,j, n=5;
        for(i = 1; i<n; i++){
            for(j =1 ; j <=i; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for(i = 1; i<=n; i++){
            for(j =i ; j <=n; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}

*/

/*
 left Pascal’s Triangle starPattern

          * 
        * *
      * * *
    * * * *
  * * * * *
    * * * *
      * * *
        * *
          *

public class starPattern {

    public static void main(String[] args) {
        int i,j,k, n=5 ;
        for(i = 1; i < n; i++){
            for(j = i; j <= n; j++){
                System.out.print("  ");
            }
            for(k = 1; k <= i; k++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for(i = 1; i <= n; i++){
            for(j =1 ; j <= i; j++){
                System.out.print("  ");
            }
            for(k = i; k <= n; k++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
*/

/*
 Butterfly/mirror Star Pattern

*          *
**        **
***      ***
****    ****
*****  *****
************
************
*****  *****
****    ****
***      ***
**        **
*          *



public class starPattern {

    public static void main(String[] args) {
        int i, j, k,l, n = 5;
        for (i = 1; i <= n; i++) {
            for (j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            for(k = i; k < n; k++){
                System.out.print("  ");
            }
            for(k = i; k < n; k++){
                System.out.print("  ");
            }
            for(l= 1;l <= i; l++){
                System.out.print("* ");
            }
            System.out.println();
        }


        for (i = 1; i <= n; i++) {
            for (j = i; j <= n; j++) {
                System.out.print("* ");
            }
            for(k = 1; k < i; k++){
                System.out.print("  ");
            }
            for(k = 1; k <i; k++){
                System.out.print("  ");
            }
            for(l= i;l <= n; l++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
*/


/* Rhombus Pattern
          * * * * * 
        * * * * *
      * * * * *
    * * * * *
  * * * * *

public class starPattern {

    public static void main(String[] args) {
        int n =5 ;
        for(int i = 1; i <= n ; i++){
            for(int j = i;j <= n ; j++){
                System.out.print("  ");
            }
            for(int k = 1; k <= n; k++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
 */