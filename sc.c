#include<stdio.h>
void main()
{
	int n,ch;
	int z=0;
	printf("Enter the number:");
	scanf("%d",&n);
	if(n>0){
	ch=1;}
	if(n<0){
	ch=2;}
	if(n==0){
	ch=3;}
	switch(ch){
		case 1:
		printf("Positive Number");
		break;
		case 2:
		printf("Negative Number");
		break;
		case 3:
		printf("Zero Number");
		break;}
}


