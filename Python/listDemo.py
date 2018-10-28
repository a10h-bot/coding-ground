list_of_number=[5,6,8,9]
print(list_of_number)
for i in list_of_number:
    print(i)

languages_to_learn_in_next_year =["C","java","JavaScript","python","Go","Rust"]
for my_list_to_do in range(len(languages_to_learn_in_next_year)):
    print(my_list_to_do)

def r_u_smart(list_of_achievent):
    print("Lets find out how smart are you !")
    if len(list_of_achievent) <5  :
        print("you are not smart")
    if len(list_of_achievent) >5 :
        print("You are smart enough to play the game !")
listA =[5,7,9,20,78,89,6]
print(r_u_smart(listA))

class myArray :
    def __init__(self,item_name,price):
        self.item_name=item_name
        self.price=price

obej1 = myArray("Apple",200)
 
arr_object =[obj1, 600,"hello"]

dict1 = dict()
dict1['apple']=90
dict1["mango"]=80

print dict1["mango"]

voted ={}

def check_voter(name): 
    if voted.get(name):
      print (“kick them out!” )
    else:
       voted[name] = True
       print (“let them vote!”)

check_voter("Anand")

resgistery={}
def cashing_pages(url):
    if resgistery.get(url):
        return data
    else:
        data = get_data_from_server(url)
        resgistery[url]=data;
        return data

