# ​​Vogel’s Approximation Method

## Steps

Below are the steps involved in Voge’s approximation method of finding the feasible solution to a transportation problem.

1. Identify the two lowest costs in each row and column of the given cost matrix and then write the absolute row and column difference. These differences are called penalties.

2. Identify the row or column with the maximum penalty and assign the corresponding cell’s min(supply, demand). If two or more columns or rows have the same maximum penalty, then we can choose one among them as per our convenience.

3. If the assignment in the previous satisfies the supply at the origin, delete the corresponding row. If it satisfies the demand at that destination, delete the corresponding column.

4. Stop the procedure if supply at each origin is 0, i.e., every supply is exhausted, and demand at each destination is 0, i.e., every demand is satisfying. If not, repeat the above steps, i.e., from step 1.
