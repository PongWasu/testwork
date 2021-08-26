public class third {
    public static void main(String[] args) {
        findChar("I am engineer", "g");
    }

    static void findChar(String str,String ch){
        char[] ch_arr1= str.toCharArray();
        char[] ch_arr2= ch.toCharArray();
        for(int i=0;i<str.length();i++){
            if(ch_arr1[i] == ch_arr2[0]){
            System.out.print(i+1);
            break;
            }
           
        }
        
    }
}
