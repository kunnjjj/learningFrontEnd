#include<bits/stdc++.h>
using namespace std;
int n,m;
int inf=1e9;
bool is_safe(int i,int j,vector<vector<int>> &dist,vector<string> &grid)
{
    return i>=0 && j>=0 && i<n && j<m && dist[i][j]==inf && grid[i][j]=='.';
}
bool canReach(vector<string> &grid,int max_time)
{
    n=grid.size();
    m=grid[0].size();
    queue<pair<int,int>> q;
    q.push({n-1,m-1});

    vector<vector<int>> dist(n,vector<int> (m,inf));
    dist[n-1][m-1]=0;
    int dx[]={+1,-1,0,0};
    int dy[]={0,0,+1,-1};
    while(!q.empty())
    {
        int X=q.front().first;
        int Y=q.front().second;
        q.pop();
        for(int x=0;x<4;x++)
        {
            if(is_safe(X+dx[x],Y+dy[x],dist,grid))
            {
                dist[X+dx[x]][Y+dy[x]]=1+dist[X][Y];
                q.push({X+dx[x],Y+dy[x]});
            }
        }
    }
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++) cout<<dist[i][j]<<" ";
        cout<<endl;
    }
    cout<<dist[0][0]<<endl;
    return dist[0][0]<=max_time;
}
int main()
{
    int n; cin>>n;
    int max_time; cin>>max_time;
    vector<string> A(n);
    for(int i=0;i<n;i++) cin>>A[i];
    for(string s:A) cout<<s<<endl;
    cin>>max_time;
    cout<<canReach(A,max_time)<<endl;



    return 0;
}