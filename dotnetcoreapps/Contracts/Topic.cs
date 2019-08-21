using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcoreapps.Contracts
{
    public class Topic
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public TopicCategory Category { get; set; }
        public string[] Tags { get; set; }
    }
}
