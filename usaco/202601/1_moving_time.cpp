#include <bits/stdc++.h>
using namespace std;

int num_case = 0;
int k = 0;


string check_valid(string input, int n){
	if(n == 0){
		return input;
	} 
	
	if (input[n-1] == 'O'){
		// flip
		for(int i=0; i<n-1; i++){
			input[i] = input[i] == 'M' ? 'O' : 'M';
		}
	}  
	
	return check_valid(input,  n-1);

}

string check_valid_2(string input, int n){
	if(n == 0){
		return input;
	}
	
	bool flip = false;
	
	for (int i=n-1; i >=0; i --){
		bool new_flip = input[i] == 'O';

		if(flip){
			input[i] = input[i] == 'M' ? 'O' : 'M';
		}
		flip = new_flip;
	}
	
	return input;
} 


int main(){
	vector<string> results;
	cin>>num_case>>k;
	
	for(int i=0; i< num_case; i++){
		int n = 0;
		string input;
		cin>>n;
		cin>>input;
		
		string result = check_valid_2(input, n);

		results.push_back(result);
	}
	
	for(int i=0; i< num_case; i++){
		if(results[i].empty()){
			cout << "NO" << endl;
		}
		else{
			cout << "YES" << endl;
			if(k == 1){
				cout << results[i] << endl;
			}
		}
	} 
	
	return 0; 
}
