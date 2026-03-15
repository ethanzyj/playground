#include<bits/stdc++.h>
using namespace std;

void print_out_vec(vector<pair<int, int>> v){
	for (int i=0; i< v.size(); i++){
		cout<<v.first<<','<<v.second<<endl;
	}
}

int main(){
	int N, K;
	cin >> N >> K;
	map<int, int> m_dict;
	map<int, int> o_dict;
	
	for(int i = 0; i< K; i++)
	{
		int x, y, z;
		cin >>x>>y>>z;
		m_dict[x] += 1;
		o_dict[y] += 1;
		o_dict[z] += 1;
	}
	
	vector<pair<int, int>> m_vec(m_dict.begin(), m_dict.end());
	sort(m_vec.begin(), m_vec.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
        return a.second < b.second;
    });
    
    print_out_vec(m_vec);
    
    vector<pair<int, int>> o_vec(o_dict.begin(), o_dict.end());
	sort(o_vec.begin(), o_vec.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
        return a.second < b.second;
    });
	print_out_vec(o_vec);


	return 0;
} 
