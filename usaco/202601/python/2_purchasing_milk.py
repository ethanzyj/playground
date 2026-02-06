def solve():
    N, Q = map(int, input().split())
    prices = list(map(int, input().split()))
    
    # deals[i] = (buckets, price) for i-th deal (0-indexed)
    # Deal i offers 2^i buckets at price prices[i]
    deals = [(2**i, prices[i]) for i in range(N)]
    
    for _ in range(Q):
        x = int(input())
        
        # Use dynamic programming with memoization
        # dp[buckets] = minimum cost to buy exactly/at least 'buckets'
        # Since x can be very large, we limit our search space
        max_buckets = x + deals[-1][0]  # We won't need more than x + largest_deal
        
        # Use dictionary for sparse DP
        dp = {0: 0}  # 0 buckets costs 0
        
        # BFS-like approach to find minimum cost
        from collections import deque
        queue = deque([0])
        min_cost = float('inf')
        
        while queue:
            current_buckets = queue.popleft()
            current_cost = dp[current_buckets]
            
            # If we have enough buckets, update min_cost
            if current_buckets >= x:
                min_cost = min(min_cost, current_cost)
                continue
            
            # Prune if current cost already exceeds best known solution
            if current_cost >= min_cost:
                continue
            
            # Try each deal
            for deal_buckets, deal_price in deals:
                new_buckets = current_buckets + deal_buckets
                new_cost = current_cost + deal_price
                
                # Limit buckets to avoid infinite expansion
                if new_buckets > max_buckets:
                    # Still check if this gets us to target
                    if new_buckets >= x:
                        min_cost = min(min_cost, new_cost)
                    continue
                
                # Only proceed if this is a better path to new_buckets
                if new_buckets not in dp or dp[new_buckets] > new_cost:
                    dp[new_buckets] = new_cost
                    if new_buckets < x:  # Only continue searching if we haven't reached target
                        queue.append(new_buckets)
                    else:
                        min_cost = min(min_cost, new_cost)
        
        print(min_cost)

if __name__ == "__main__":
    solve()