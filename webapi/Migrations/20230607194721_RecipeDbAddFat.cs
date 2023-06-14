using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RankingApp.Migrations
{
    /// <inheritdoc />
    public partial class RecipeDbAddFat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Fat",
                table: "Recipes",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fat",
                table: "Recipes");
        }
    }
}
