<html>
<head>
</head>
<body>
    <script>
        'use strict'

        var persi = {};

        var input = '<?php echo '[{"fname": "name1", "lname": "ilson", "age":15},{"fname": "sharlok",  "lname": "meltzer",  "age":45},{"fname": "pnini", "age":27},{"fname": "bertok",  "lname": "frei", "age":67}]'; ?>';

        var persons_input = JSON.parse(input);
        var persons_output = [];
        for (let i = 0; i < persons_input.length; i++ ){

            Object.defineProperty(persi, 'ID', {
                    enumerable: true,
                    configurable: false,
                    writable: false
            });

            // Object.defineProperty(persi, 'fullName', {
            //     get: function() { return this.fname + " " + this.lname; },
            //     set: function(name) { 
            //         this.fname = name.split(' ')[0];
            //         this.lname = name.split(' ')[1];
            //         }
            //     });
            
            let person = new Person(i, persons_input[i].fname,  persons_input[i].lname, persons_input[i].age )
            persons_output.push(person);
        }

        console.log(persons_output);
        persi = persons_output[0];
        persi.fname ='judy';
        persi.ID = 99;
        persi.ID = 88;

        console.log(persi);
        //var full_name = persi.fullname;
        //console.log(full_name);

        function Person(p_id, p_fname, p_lname, p_age) {
            this.ID =  p_id;
            this.fname = p_fname;
            this.lname = p_lname;
            this.age = p_age;
        }


    </script>
</body>
</html>