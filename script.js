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
    }