```plaintext
6
5 4 2 6 3 1
```

```cpp
//2022-11-19 10:01 by rainboy

#include <iostream>
#include <algorithm>

int a[10000];
int n;

int c[10000];
int c_idx=0;
void push_c(int a){
    c[c_idx]= a;
    c_idx++;
}

//int x[] --> int * x
void merge(int x[],int len1,int y[],int len2){
    int i=0,j=0;
    while ( i < len1 && j < len2 ) {
        if( x[i] < y[j]){
            push_c(x[i]);
            i++;
        }
        else {
            push_c(y[j]);
            j++;
        }
    }
    for( int k =i;k<len1;k++) push_c(x[k]);
    for( int k =j;k<len2;k++) push_c(y[k]);
}

void merge_sort(int l,int r){
    if( l == r) return ;
    int mid = (l+r) >> 1;
    merge_sort(l, mid);
    merge_sort(mid+1, r);

    //-----这里 代表
    // [l,mid] 有序, [mid+1,r] 有序
    c_idx=0;
    merge(&a[l],mid-l+1,&a[mid+1],r-mid);
    c_idx=0;
    for(int i=l;i<=r;i++){
        a[i] = c[c_idx];
        c_idx++;
    }
}

int main(){
    std::cin >> n;
    for(int i=1;i<=n;++i){
        std::cin >> a[i];
    }
    merge_sort(1, n);
    for(int i=1;i<=n;++i){
        std::cout << a[i]<< " " ;
    }

    return 0;
}
```
