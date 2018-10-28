#include<stdio.h>
#include<math.h>
#include<stdlib.h>
#include<string.h>

struct node {
  int data;
  struct node *left;
  struct node *right;
};

struct node * insert(struct node * root, int data){
  if(root == NULL){
    struct node * node = (struct node *)malloc(sizeof(struct node));// allocate space to create root node
    node->data =data;
    node->left =NULL;
    node->right =NULL;

    return node;

  }
  else {
    struct node *curr;
    if(data<=root->data){
      curr=insert(root->left,data);
      curr->left=curr;
    }
    if (data > root->data){
      curr=insert(root->right,data);
      curr->right=curr;
    }
    return root;
  }
}

void preOrder( struct node *root) {
      if(root == NULL) {
        return ;
      }
    else
     printf("%d\n", root->data);
     preOrder(root->left);
     preOrder(root->right);
}

int main() {

    struct node* root = NULL;

    int t;
    int data;
    printf("Enter a number !");
    scanf("%d", &t);


    while(t-- > 0) {
        scanf("%d", &data);
        root = insert(root, data);
    }

	preOrder(root);
    return 0;
}
