$(function() {

  /*
   *  Make an Ajax Call

Let's start by finding your Report Card URL (click here to see how) on CodeSchool.com and make an Ajax request that follows the following requirements: - Make an Ajax request to the Report Card URL you found on CodeSchool.com - Set the dataType as jsonp - Pass a success callback We made a sample Ajax request available to help you with this task.
An Element per Completed Course

By now, our Ajax call will have returned a response object that contains an array field called response.courses.completed. Let's add one div element per item in the courses.completed array inside of the #badges element. Add the CSS class course to each div element we add to #badges.
Adding Course Titles

Let's add an h3 tag inside each of the .course elements we are generating. These h3 tags should have the title property of each course as its contents.
Adding Course Images

This time, let's add an img tag inside our .course elements. These images should have each course's badge property as its src attribute.
Adding Course Buttons

Now let's add an a tag to our .course elements. These anchor tags need to include: - the href attribute set as each course's url property - the target attribute set as _blank - the btn & btn-primary CSS classes - See Course as its text contents

   */
  $.ajax({
    url: '//www.codeschool.com/users/motorhead2033.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response.courses.completed);
    },
    error: function(error){
      console.log(error);
    }
  });

});
