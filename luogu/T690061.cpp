//https://www.luogu.com.cn/problem/T690061

#include<bits/stdc++.h>
using namespace std;
int n;
int main(){
    int t,mx=0;
    cin>>t;
    for(int i=0;i<t;i++){
        int a[100005]={0};
        mx=0;
        cin>>n;
        for(int j=0;j<n;j++){
            cin>>a[j];
            if(a[j] > mx){
                mx=a[j];
            }
        }
        bool z=true;
        for(int j=0;j<n;j++){
            if(mx % a[j] != 0){
                z=false;
            }
        }
        if(z){
            cout<<"Yes"<<endl;
        }
        else{
            cout<<"No"<<endl;
        }
    }
    return 0;
}
