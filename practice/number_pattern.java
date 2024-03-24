
/* Number Pyramid Pattern 
1 
1 1 
1 1 1 
1 1 1 1 
1 1 1 1 1 


package Number_Pattern;

public class number_pattern {
    public static void main(String[] args) {
        int i,j, n =5;
        for(i=1; i<=n; i++ ){
            for(j = 1; j <=i; j++){
                System.out.print("1 ");
            }
            System.out.println();
        }
    }

}
 */

 /* Right Triangle
 
 1
 2 2
 3 3 3
 4 4 4 4
 5 5 5 5 5


 public class number_pattern {
 
    public static void main(String[] args) {
        int n = 5;
        // for(int i = 1; i <= n; i++){
        //     for(int j = 1;j<=i; j++){
        //         System.out.print(i+ " ");
        //     }
        //     System.out.println();
        // }



        for(int i = 1,p=1; i <= n; i++,p++){
            for(int j = 1;j<=i; j++){
                System.out.print(p+ " ");
            }
            System.out.println();
        }
    }
 }

  */

  /* Reverse Hill pattern

  1 1 1 1 1 1 1 1 1
    2 2 2 2 2 2 2 
      3 3 3 3 3 
        4 4 4
          5

   public class number_pattern {
   
    public static void main(String[] args) {
        int i,j,p,n = 5;

        for(i = 1,p=1; i<=n; i++,p++){
            for(j = 1;j<= i; j++){
                System.out.print("  ");
            }
            for(j = i;j< n; j++){
                System.out.print(p+" ");
            }
            for(j = i;j<= n; j++){
                System.out.print(p+" ");
            }
            System.out.println();
        }
    }
   }
   */

   /*
   
   5
   4 4
   3 3 3
   2 2 2 2
   1 1 1 1 1


    public class number_pattern {
    
        public static void main(String[] args) {
            int n =5;
            for(int i = 1,p=5; i <= n; i++,p--){
                for(int j = 1;j<=i; j++){
                    System.out.print(p+ " ");
                }
                System.out.println();
            }
        }
    }

    */

    /*
     0
     2 2 
     4 4 4
     6 6 6 6 
     8 8 8 8 8
     

     public class number_pattern {
    
        public static void main(String[] args) {
            int n =5;
            for(int i = 1,p=0; i <= n; i++,p+=2){
                for(int j = 1;j<=i; j++){
                    System.out.print(p+ " ");
                }
                System.out.println();
            }
        }
    }
    */

    /*
     
    1                   
    2 2 
    1 1 1 
    2 2 2 2
    1 1 1 1 1 

    or

    a
    b b 
    a a a
    b b b b 
    a a a a a 
     

     
     public class number_pattern {
    
        public static void main(String[] args) {
            int n =5;
            for(int i = 1; i <= n; i++){
                for(int j = 1;j<=i; j++){
                    if(i % 2 == 0){
                        // System.out.print("2 ");
                        System.out.print("b ");
                    }
                    else{

                        // System.out.print("1 ");
                        System.out.print("a ");
                    }
                }
                System.out.println();
            }
        }
    }
    */


    /*
              1
            2 2 2 
          3 3 3 3 3 
        4 4 4 4 4 4 4
      5 5 5 5 5 5 5 5 5
        6 6 6 6 6 6 6
          7 7 7 7 7
            8 8 8 
              9  

     public class number_pattern {
     
        public static void main(String[] args) {
            int i , j,, n = 5;
            for(i = 1,p= 1; i < n; i++,p++){
                for(j= i; j <= n; j++ ){
                    System.out.print("  ");
                }
                for(j= 1; j < i; j++ ){
                    System.out.print(p +  " ");
                }
                for(j= 1; j <= i; j++ ){
                    System.out.print(p+" ");
                }
                
                System.out.println();
            }


            for(i = 1, p= 5; i <= n; i++,p++){
                for(j= 1; j <= i; j++ ){
                    System.out.print("  ");
                }
                for(j= i; j < n; j++ ){
                    System.out.print(p +  " ");
                }
                for(j= i; j <= n; j++ ){
                    System.out.print(p+" ");
                }
                
                System.out.println();
            }
        }
     }

 */


     /*
              1
            2 2 2 
          3 3 3 3 3 
        4 4 4 4 4 4 4
      5 5 5 5 5 5 5 5 5
        4 4 4 4 4 4 4
          3 3 3 3 3 
            2 2 2
              1 
  

      
     public class number_pattern {
     
        public static void main(String[] args) {
            int i , j,p, n = 5;
            for(i = 1,p= 1; i < n; i++,p++){
                for(j= i; j <= n; j++ ){
                    System.out.print("  ");
                }
                for(j= 1; j < i; j++ ){
                    System.out.print(p +  " ");
                }
                for(j= 1; j <= i; j++ ){
                    System.out.print(p+" ");
                }
                
                System.out.println();
            }


            for(i = 1,p= 5; i <= n; i++,p--){
                for(j= 1; j <= i; j++ ){
                    System.out.print("  ");
                }
                for(j= i; j < n; j++ ){
                    System.out.print(p +  " ");
                }
                for(j= i; j <= n; j++ ){
                    System.out.print(p+" ");
                }
                
                System.out.println();
            }
        }
     }

 */

 /*
 
 1
 1 2
 1 2 3
 1 1 3 4 
 1 2 3 4 5

  

  public class number_pattern {
  public static void main(String[] args) {
    int n = 5;
    for(int i = 1; i <= n; i++){
        int p = 1;
        for(int j = 1; j<= i; j++,p++){
            System.out.print(p +" ");
        }
        System.out.println();
    }
  }
    
  } */



  /*
   1 2 3 4 5 
     1 2 3 4 
       1 2 3
         1 2
           1


   public class number_pattern {
   
    public static void main(String[] args) {
        int n = 5;
        for(int i = 1; i<= n; i++){
            int p = 1;
            for(int j = 1; j <= i; j++){
                System.out.print("  ");
            }
            for(int j = i; j <= n; j++){
                System.out.print(p++ +" ");
            }
            System.out.println();
        }
    }
   }
*/


/*
             1
           1 2 3
         1 2 3 4 5
       1 2 3 4 5 6 7 
     1 2 3 4 5 6 7 8 9
    


   public class number_pattern {
   
    public static void main(String[] args) {
        int n = 5;
        for(int i = 1; i<= n; i++){
            int p = 1;
            for(int j = i; j <= n; j++){
                System.out.print("  ");
            }
            for(int j = 1; j < i; j++){
                System.out.print(p++ +" ");
            }
            for(int j = 1; j <= i; j++){
                System.out.print(p++ +" ");
            }
            System.out.println();

        }
    }
}  */



/*
          1 
        1 2 3
      1 2 3 4 5
    1 2 3 4 5 6 7
  1 2 3 4 5 6 7 8 9
    1 2 3 4 5 6 7
      1 2 3 4 5
        1 2 3
          1


public class number_pattern {
   
    public static void main(String[] args) {
        int i,j,  n = 5;
        for( i = 1; i< n; i++){
            int p = 1;
            for( j = i; j <= n; j++){
                System.out.print("  ");
            }
            for( j = 1; j < i; j++){
                System.out.print(p++ +" ");
            }
            for( j = 1; j <= i; j++){
                System.out.print(p++ +" ");
            }
            System.out.println();

        }



        for(i = 1; i <= n; i++){
            int p =1 ;
            for(j= 1; j <= i; j++ ){
                System.out.print("  ");
            }
            for(j= i; j < n; j++ ){
                System.out.print(p++ +  " ");
            }
            for(j= i; j <= n; j++ ){
                System.out.print(p++ +" ");
            }
            
            System.out.println();
        }
    }
}  */


/*
 
    5
    5 4
    5 4 3
    5 4 3 2
    5 4 3 2 1


 public class number_pattern {
 
    public static void main(String[] args) {
        int i,j, n = 5;
        for(i = 1; i<= n ; i++){
            int p = 5;
            for(j = 1; j <= i; j++){
                System.out.print( p-- +" ");
            }
            System.out.println();
        }
    }
 }
 */

 /*
   5 4 3 2 1 
     4 3 2 1
       3 2 1
         2 1
           1
 

 public class number_pattern {
   
    public static void main(String[] args) {
        int n = 5;
        for(int i = 1, k = n; i<= n; i++,k--){
            int p = k;   // kyuki har row me value decrease ho kar print ho raha hai isliyye k = n initialize kiya.aur p ko k ka value assign kar diya 
            for(int j = 1; j <= i; j++){
                System.out.print("  ");
            }
            for(int j = i; j <= n; j++){
                System.out.print(p-- +" ");
            }
            System.out.println();
        }
    }
   }  */


   /*
            1
          1 2 1
        1 2 3 2 1
      1 2 3 4 3 2 1
    1 2 3 4 5 4 3 2 1
    

    public class number_pattern {
    
        public static void main(String[] args) {
            int n = 5;
            for(int i = 1; i<= n; i++){
                int p = 1;
                for(int j = i; j <= n; j++){
                    System.out.print("  ");
                }
                for(int j = 1; j < i; j++){
                    System.out.print(p++ +" ");
                }
                for(int j = 1; j <= i; j++){
                    System.out.print(p-- +" ");
                }
                System.out.println();
            }
        }
    }  */


    /*
      1
      2 3
      4 5 6
      7 8 9 10
    

     public class number_pattern {
     
        public static void main(String[] args) {
            int p = 1, n= 4;
            for(int i = 1 ; i <= n ; i++){
                for(int j = 1; j <= i; j++){
                    System.out.print(p++ +" ");
                }
                System.out.println();
            }
        }
     }   */