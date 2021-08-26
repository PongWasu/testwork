public class second{

    public static void main(String[] args) {
        printTriAngle(5);
    }

    static void printTriAngle(int num){
        
        for(int i=0;i<num;i++){
            for(int a=-1;a<i;a++){
            System.out.print(i);
            }
            System.out.println();
        }
        
    }
}