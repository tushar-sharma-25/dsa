namespace Problems
{
    public class Program
    {
        static void Main(string[] args)
        {
            int[] input  = new int[] { 1,2,3,2,2 };

            Console.WriteLine(TotalFruit(input));
        }

        public static int TotalFruit(int[] input)
        {

            Dictionary<int, int> treeMap = new Dictionary<int, int>();
            int end =0, start =0;
            int maxFruits= 0;

            while(end<input.Length){
                //if present in map
                if(treeMap.ContainsKey(input[end])){
                    treeMap[input[end]] += 1;
                }
                    
                // else
                else{
                    if(treeMap.Count < 2){
                        treeMap.Add(input[end], 1);
                    }
                    // we have encountered a new unique fruit
                    else{
                        int localMax = treeMap.Values.Sum();
                        maxFruits = Math.Max(maxFruits, localMax);
                        treeMap.Remove(input[start]);
                        treeMap.Add(input[end], 1);
                        start++;
                    }
                }
                end++;
            }
            return maxFruits;

        }
    }
}
