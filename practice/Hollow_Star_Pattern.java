/* space and * pattern formula
 
First Row: i=1

Last Row: i=n

First Column: j=1

Last Col: j=n

Middle Row or Col: n/2+1

Major Diagonal: i==j

Left Diagonal: i+j==n+1

 */

/* Square Hollow Pattern

* * * * * 
*       *
*       *
*       *
* * * * *

public class Hollow_Star_Pattern {

    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 || j == 1 || i == n || j == n) {
                    System.out.print("* ");
                }else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}
 */

/*
 Hollow Triangle Pattern

     *
    * *
   *   *
  *     *
 *       *
***********

public class Hollow_Star_Pattern {

    public static void main(String[] args) {
        int i, j, k, n = 5;

		// outer loop to handle rows
		for (i = 1; i <= n; i++) {

			// inner loop to print spaces.
			for (j = i; j < n; j++) {
				System.out.print(" ");
			}

			for (k = 1; k <= (2 * i - 1); k++) {
				// printing stars.
				if (k == 1 || i == n || k == (2 * i - 1)) {
					System.out.print("*");
				}
				// printing spaces.
				else {
					System.out.print(" ");
				}
			}

			System.out.println("");
		}

    }
}
*/


/* Hollow Reverse Triangle Pattern
 
***********
 *       *
  *     *
   *   *
    * *
     *


public class Hollow_Star_Pattern {
	// Function to demonstrate pattern
	public static void printPattern(int n)
	{
		int i, j, k;

		// outer loop to handle rows
		for (i = n; i >= 1; i--) {   // Hollow Triangle Pattern or Hollow Reverse Triangle Pattern me sirf yahi line ka difference hai

			// inner loop to print spaces.
			for (j = i; j <= n; j++) {
				System.out.print(" ");
			}

			for (k = 1; k <= (2 * i - 1); k++) {
				// printing stars.
				if (k == 1 || i == n || k == (2 * i - 1)) {
					System.out.print("*");
				}
				// printing spaces.
				else {
					System.out.print(" ");
				}
			}

			System.out.println("");
		}
	}

	// Driver Function
	public static void main(String args[])
	{
		int n = 5;
		printPattern(n);
	}
}

*/


/* Hollow Diamond Pyramid

     *
    * *
   *   *
  *     *
 *       *
*         *
 *       *
  *     *
   *   *
    * *
     *

 public class Hollow_Star_Pattern {
 
	public static void main(String[] args) {
		input_n(5);
	}
	public static void input_n(int n){
			for(int i = 1; i<n; i++){
				for(int j = i; j<=n; j++){
					System.out.print(" ");
				}
				for(int j = 1; j<=2*i-1; j++){
					if (j == 1 || j == 2* i-1) {
						
						System.out.print("*");
					}
					else{
						System.out.print(" ");
					}
				}
				System.out.println();
			}



			for(int i = n; i>=1; i--){
				for(int j = i; j<=n; j++){
					System.out.print(" ");
				}
				for(int j = 1; j<=2*i-1; j++){
					if (j == 1 || j == 2* i-1) {
						
						System.out.print("*");
					}
					else{
						System.out.print(" ");
					}
				}
				System.out.println();
			}
	}
 }
 */



 /* Hollow Hourglass Pattern

* * * * * * 
 *       * 
  *     * 
   *   * 
    * * 
     * 
    * * 
   *   * 
  *     * 
 *       * 
* * * * * * 
  */