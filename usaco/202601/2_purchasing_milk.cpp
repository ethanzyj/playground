#include<bits/stdc++.h>
using namespace std;
struct Bucket {
    double price;          
    double size;
	double unit_price;       
};

bool compareBucket(const Bucket& a, const Bucket& b) {
    return a.unit_price < b.unit_price;       
}

int calc_mini_cost(vector<Bucket> buckets, int query){
	int total_price = 0;
	
	for (int i=0; i<buckets.size(); i++){
		if(query == 0){
			return total_price;
		}
		
		int max_bucket_num = query/buckets[i].size;
		
		if(max_bucket_num > 0){
			query -= max_bucket_num * buckets[i].size;
			total_price +=  buckets[i].price * max_bucket_num;
		}
		query = query % (int)buckets[i].size;
	}
	
	return total_price;
}

int calc_mini_cost_2(vector<Bucket> buckets, int query){
	int total_price = 0;
	
	for (int i=0; i<buckets.size(); i++){
		if(query == 0){
			return total_price;
		}
		
		int max_bucket_num = query/buckets[i].size;
		
		if(max_bucket_num > 0){
			query -= max_bucket_num * buckets[i].size;
			total_price +=  buckets[i].price * max_bucket_num;
		}
		query = query % (int)buckets[i].size;
	}
	
	return total_price;
}
		
int main(){
	long long N, Q;

	cin>>N>>Q;
	vector<Bucket> buckets;
	
	for(int i=0;i<N;i++){
		double size = pow(2, i);
		double price = 0.0;
		cin >> price;
		Bucket b = {price, size, price/size};
		buckets.push_back(b);
	}
	
	sort(buckets.begin(),buckets.end(), compareBucket);
	
	
	for (int i = 0; i<Q; i++){
		int query = 0;
		cin >> query;
		int price = calc_mini_cost(buckets, query);
		cout << price << endl;
	}
	


	return 0;
}

