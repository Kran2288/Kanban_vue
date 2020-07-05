function objects(title, description, time, time_of_work, name, tag, data, id){
    return{
      title, description, time, time_of_work, name, tag, data, id
    }
  }
  
  const plan_array = [
    // objects("Task 1", "description", "time", "time_of_work", "name", "plan"),
    // objects("Task 2", "description", "time", "time_of_work", "name", "in-work"),
    // objects("Task 3", "description", "time", "time_of_work", "name", "in-work"),
    // objects("Task 4", "description", "time", "time_of_work", "name", "ended")
  ]
  new Vue({
    el: "#app",
    data: {
      windowVisibility: false,
      userNameBoolevo: false,
      boolevo: [false, false, false],
      userName: '',
      search: '',
      description: '',
      status: '',
      sponsor: '',
      start: '',
      end: '',
      title: 'Vue.JS Task Manager',
      editable: false,
      uuid: 0, 
      dif_id: 0,
      darkIsEnabled: true,
      darkText: true,
      theme_naming: ["Светлая тема", "Темная тема"],
      selected_id: 0,
      check_box: 0,
      schedule: [0, 0, 0],
      plan_array: plan_array
    },
    methods: {
        checkFull: function(name){
          if(name != "" || name != " "){
            this.uuid++
            this.dif_id++
            this.plan_array.push(objects('Задача ' + this.uuid, this.search, "", "", this.userName, "plan", "", 'Task ' + this.dif_id))
            this.status = ''
            this.sponsor = ''
            this.start = ''
            this.end = ''
            this.shell()
            this.userNameBoolevo = !this.userNameBoolevo
          }
        },
        checkTextInInput: function(search){
          if(search != '' || search != " "){
            // this.windowVisibility = !this.windowVisibility
            this.search = search
            this.userNameBoolevo = !this.userNameBoolevo
          }
        },
        reset_input: function(){
          this.search =  '',
          this.description = '',
          this.status = '',
          this.sponsor = '',
          this.start = '',
          this.end = ''
        },
        add_data_to_array: function(desc, status, sponsor, start, end){
            if((status == 'plan' || status == 'in-work' || status == 'ended') && this.editable == false){
                this.uuid++
                this.plan_array.push(objects('Task ' + this.uuid, desc, start, end, this.userName, status, ""))
                this.reset_input()
                this.windowVisibility = !this.windowVisibility
                this.shell()
            }
            else if((status == 'plan' || status == 'in-work' || status == 'ended') && this.editable == true){
                      for(let i = 0; i < this.plan_array.length; i++){
                        if(this.plan_array[i]["id"].includes(this.selected_id)){
                          this.plan_array[i]["description"] = this.search
                          this.plan_array[i]["time"] = this.start
                          this.plan_array[i]["time_of_work"] = this.end
                          this.plan_array[i]["name"] = this.sponsor
                          this.plan_array[i]["tag"] = this.status
                        }
                      }
                      this.windowVisibility = !this.windowVisibility
                      this.reset_input()
                      this.selected_id = 0
                      this.editable = false
                      this.shell()
            }
          },
          edit_app_block: function(index){
            for(let i = 0; i < this.plan_array.length; i++){
              if(this.plan_array[i]["id"].includes(index + 1)){
                if(this.plan_array[i]["tag"] == "plan"){
                  this.boolevo[0] = true
                  this.boolevo[1] = true
                  this.boolevo[2] = false
                }
                else if(this.plan_array[i]["tag"] == "in-work"){
                  this.boolevo[0] = false
                  this.boolevo[1] = true
                  this.boolevo[2] = false
                }
                else if(this.plan_array[i]["tag"] == "ended"){
                  this.boolevo[0] = false
                  this.boolevo[1] = false
                  this.boolevo[2] = true
                }
                this.search =  this.plan_array[i]["description"],
                this.status = this.plan_array[i]["tag"],
                this.sponsor = this.plan_array[i]["name"],
                this.start = this.plan_array[i]["time"],
                this.end = this.plan_array[i]["time_of_work"]
                this.editable = true
                this.windowVisibility = !this.windowVisibility
                this.selected_id = index + 1
              }
            }
          },